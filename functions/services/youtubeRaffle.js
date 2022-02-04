const { google } = require('googleapis');
const dotenv = require('dotenv').config();
const { initializeApp, getApps, getApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();

const db = getFirestore();

const youtube = google.youtube('v3');
const Oauth2 = google.auth.OAuth2;

const clientID = process.env.YR_CLIENTID;
const clientSecret = process.env.YR_CLIENTSECRET;
const redirectURI = process.env.YR_REDIRECTURI;
const apiKey = process.env.YR_APIKEY;

const scope = [
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.channel-memberships.creator'
];

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

youtubeRaffle.getCode = response => {
	const authUrl = userAuth.generateAuthUrl({
		access_type: 'offline',
		scope
	})
	response.redirect(authUrl);
};

youtubeRaffle.getTokensWithCode = async code => {
	const credentials = await userAuth.getToken(code);
	youtubeRaffle.authorize(credentials);
};

youtubeRaffle.authorize = (raffle_tokens) => {
	userAuth.setCredentials(raffle_tokens.tokens);
	console.log('Succesfully set credentials');
	const response = db.collection('users').doc(testUser).collection('private_info').doc('youtube_tokens').set(raffle_tokens.tokens);
};

userAuth.on('tokens', (raffle_tokens) => {
	console.log('New tokens received');
	console.log('on', raffle_tokens);
	if (raffle_tokens.refresh_token) {
		const response = db.collection('users').doc(testUser).collection('private_info').doc('youtube_tokens').set(raffle_tokens);
	}
});

botAuth.on('tokens', (raffle_tokens) => {
	if (raffle_tokens.refresh_token) {
		const response = db.collection('bots').doc('JoJ3o').set(raffle_tokens);
	}
});

// Check if previous tokens exist to avoid authentication every server restart
async function checkTokens() {
	const doc = await db.collection('users').doc(testUser).collection('private_info').doc('youtube_tokens').get();
	if (!doc.exists) {
		console.log('No such document!');
	} else {
		console.log('Setting tokens');
		userAuth.setCredentials(doc.data());
	}
}

// API Calls
async function findActiveChat() {
	const doc = await db.collection('users').doc(testUser).collection('tokens').doc('youtube').get();
	userAuth.setCredentials(doc.data());
	const response = await youtube.liveBroadcasts.list({
		auth: userAuth,
		part: 'snippet',
		broadcastStatus: 'active'
	});
	const latestChat = response.data.items[0];
	channelID = latestChat.snippet.channelId;
	liveChatID = latestChat.snippet.liveChatId;
	console.log('Channel ID found', channelID);
	console.log('Chat ID found', liveChatID)
}

youtubeRaffle.startRaffle = async(data, tokens) => {
	console.log('Start raffle');
	console.log('data: ', data);
	await findActiveChat();
	startTrackingChat(data, tokens);
	setTimeout(function() {stopTrackingChat(data);}, (data.duration * (60) * 1000));
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
	console.log(raffleUsersEntered);
	pickWinner(data);
	raffleUsersEntered = [];
}

async function getChatMessages(raffleData) {
	console.log('Get chat');
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

	console.log('status', status);

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

async function postMessage(messageText, myAccount, announceWinners) {
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
			auth: (!!myAccount ? userAuth : botAuth),
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
	postMessage('The winners of the raffle are: ' + winnerArray.join(', '), data.myAccount, data.announceWinners);
}

checkTokens();

module.exports = youtubeRaffle;
