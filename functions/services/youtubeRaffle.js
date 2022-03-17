const { google } = require('googleapis');
const dotenv = require('dotenv').config();
const { initializeApp, getApps, getApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();

const db = getFirestore();

const clientID = process.env.YR_CLIENTID;
const clientSecret = process.env.YR_CLIENTSECRET;
const redirectURI = process.env.YR_REDIRECTURI;
const apiKey = process.env.YR_APIKEY;

const youtube = google.youtube('v3');
const Oauth2 = google.auth.OAuth2;

const userAuth = new Oauth2(clientID, clientSecret, redirectURI);
const botAuth = new Oauth2(clientID, clientSecret, redirectURI);

const testUser = 'EBSnlWXow3YeFaWxokmnXIijgkv3'
const intervalTime = 5000;

let liveChatID;
let channelID;
let nextPage;
let interval;
let chatMessages = [];
let raffleUsersEntered = [];
let raffleStarted = false;

const youtubeRaffle = {};

// Refresh invalid tokens
userAuth.on('tokens', (tokens) => {
	console.log('New user tokens received');
	const response = db.collection('users').doc(testUser).collection('tokens').doc('youtube').set(tokens);
});

botAuth.on('tokens', (tokens) => {
	console.log('New bot tokens received');
	const response = db.collection('bots').doc('JoJ3o').set(tokens);
});

// Raffle functions
youtubeRaffle.startRaffle = async(data, credentials) => {
	console.log('Start raffle');
	console.log({data: data, credentials: credentials});
	userAuth.setCredentials(credentials);
	const activeChat = await findActiveChat();
	if (activeChat) {
		startTrackingChat(data, credentials);
		setTimeout(function() {stopTrackingChat(data);}, (data.duration * 60 * 1000));
	} else {
		console.log(new Error("No active stream found"));
	}
}

async function findActiveChat() {
	const response = await youtube.liveBroadcasts.list({
		auth: userAuth,
		part: 'snippet',
		broadcastStatus: 'active'
	});
	if (response.data.items.length === 0) return false
	const latestChat = response.data.items[0];
	channelID = latestChat.snippet.channelId;
	liveChatID = latestChat.snippet.liveChatId;
	console.log('Channel ID found', channelID);
	console.log('Chat ID found', liveChatID)
	return true
}

async function startTrackingChat(data, tokens) {
	console.log('Start tracking');
	postMessage('Raffle started! Type ' + data.enterMessage + ' to enter', data.useMyAccount, data.announceWinners)
	interval = setInterval(function() { getChatMessages(data); }, intervalTime);
}

async function stopTrackingChat(data) {
	console.log('Stop tracking');
	clearInterval(interval);
	raffleStarted = false;
	pickWinner(data);
	raffleUsersEntered = [];
}

async function getChatMessages(raffleData) {
	const doc = await db.collection('users').doc(testUser).collection('tokens').doc('youtube').get();
	userAuth.setCredentials(doc.data());
	const response = await youtube.liveChatMessages.list({
		auth: userAuth,
		part: ['snippet', 'authorDetails'],
		liveChatId: liveChatID,
		maxResults: 2000,
		pageToken: nextPage
	});
	const {data} = response;
	const newMessages = data.items;
	nextPage = data.nextPageToken;
	if (raffleStarted) {
		chatMessages.push(...newMessages);
		console.log('Total chat messages:', chatMessages.length);
		newMessages.forEach(message => {
			printMessage(message);
			const messageText = message.snippet.displayMessage.toLowerCase();
			const enterMessage = raffleData.enterMessage.toLowerCase();
			const author = message.authorDetails.displayName;
			if (messageText == enterMessage && !raffleUsersEntered.includes(author)) {
				enterRaffle(raffleData, message, author);
			}
		})
	}
	raffleStarted = true;
}

function printMessage(message) {
	const d = new Date();
	let hour = d.getUTCHours();
	let minutes = d.getUTCMinutes();
	let user = message.authorDetails.displayName;
	let messageText = message.snippet.displayMessage;
	console.log('[' + hour + ':' + minutes + '] ' + 'User: ' + user + ' | Message: ' + messageText);
}

async function sortUser(author, channelId) {
	if (await checkMember(channelId)) {
		console.log(author, 'is a Member!');
		return 'Member'
	}

	if (await checkSub(channelId)) {
		console.log(author, 'is a Subscriber');
		return 'Subscriber'
	}

	console.log(author, 'is a pleb!');
	return 'pleb'
}

async function enterRaffle(data, message, author) {
	const status = await sortUser(author, message.authorDetails.channelId);

	if (status === 'Member') {
		for (let i = 0; i < data.memberPrivilege; i++) {
			raffleUsersEntered.push(author);
		}
	} else if (status === 'Subscriber' && !data.memberOnly) {
		for (let i = 0; i < data.subPrivilege; i++) {
			raffleUsersEntered.push(author);
		}
	} else {
		if (!data.memberOnly && !data.subOnly) {
			raffleUsersEntered.push(author);
		}
	}
}

async function checkMember(channelId) {
	try {
		const response = await youtube.members.list({
			auth: userAuth,
			part: 'snippet'
		});
		console.log(response.data);

	} catch (err) {
		console.log('Could not check member!');
		console.log(err.message);
	}
	return false
}

async function checkSub(channelId) {
	try {
		const response = await youtube.subscriptions.list({
			key: apiKey,
			part: ['snippet', 'contentDetails', 'subscriberSnippet'],
			channelId: channelId,
			forChannelId: channelID
		});
		if (response.data.pageInfo.totalResults >= 1) {
			return true;
		}
	} catch (err) {
		console.log('Could not check subscriber');
		console.log(err.message);
	}
	return false;
}

async function postMessage(messageText, useMyAccount, announceWinners) {
	if (announceWinners) {
		const botDoc = db.collection('bots').doc('JoJ3o');
		const doc = await botDoc.get();
		if (!doc.exists) {
			console.log('No such document!');
		} else {
			botTokens = doc.data();
		}

		const tokens = await db.collection('users').doc(testUser).collection('tokens').doc('youtube').get();
		userAuth.setCredentials(tokens.data());
		botAuth.setCredentials(botTokens);

		const response = youtube.liveChatMessages.insert({
			auth: (!!useMyAccount ? userAuth : botAuth),
			part: 'snippet',
			resource: {
				snippet: {
					liveChatId: liveChatID,
					type: 'textMessageEvent',
					textMessageDetails: {
						messageText
					}
				}
			}
		})
	}
}

function pickWinner(data) {
	console.log(raffleUsersEntered);
	let winnerArray = [];
	for (let i = 0; i < data.winnerAmount; i++) {
		if (raffleUsersEntered.length != 0) {
			const random = Math.floor(Math.random() * raffleUsersEntered.length);
			winnerArray.push(raffleUsersEntered[random]);
			if (!data.duplicateWinners) {
				let i = 0;
				const arrayItem = raffleUsersEntered[random];
				while (i < raffleUsersEntered.length) {
					if (raffleUsersEntered[i] === arrayItem) {
						raffleUsersEntered.splice(i, 1);
					} else {
						++i;
					}
				}
			} else {
				raffleUsersEntered.splice(random, 1);
			}
			console.log(random, winnerArray, raffleUsersEntered);
		}
	}
	console.log(winnerArray);
	postMessage('The winners of the raffle are: ' + winnerArray.join(', '), data.useMyAccount, data.announceWinners);
}

module.exports = youtubeRaffle;
