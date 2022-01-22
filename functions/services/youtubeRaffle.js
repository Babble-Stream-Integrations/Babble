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

const testUser = 'EBSnlWXow3YeFaWxokmnXIijgkv2'
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

youtubeRaffle.authorize = ({raffle_tokens}) => {
	userAuth.setCredentials(raffle_tokens);
	console.log('Succesfully set credentials');
	db.collection('users').doc(testUser).collection('private_info').doc('youtube_tokens').set(raffle_tokens);
};

userAuth.on('tokens', (raffle_tokens) => {
	console.log('New tokens received');
	if (raffle_tokens.refresh_token) {
		db.collection('users').doc(testUser).collection('private_info').doc('youtube_tokens').set(raffle_tokens);
	}
});

botAuth.on('tokens', (raffle_tokens) => {
	if (raffle_tokens.refresh_token) {
		db.collection('bots').doc('JoJ3o').set(raffle_tokens);
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
youtubeRaffle.findActiveChat = async() => {
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
		console.log('Catched bish');
		console.log(err.message);
	}
	return false;
}

async function checkMember(channelId) {
	try {
		const response = await youtube.members.list({
			auth: userAuth,
			part: 'snippet'
		});
		console.log(response.data);

	} catch (err) {
		console.log('Catched!');
		console.log(err.message);
	}
	return false
}

function respond(newMessages, data) {
	newMessages.forEach(message => {
		const messageText = message.snippet.displayMessage.toLowerCase();
		const author = message.authorDetails.displayName;
		if (messageText == data.enterMessage && !raffleUsersEntered.includes(author)) {
			if (data.subOnly.at(-1) == 1) {
				checkSub(message.authorDetails.channelId).then(function(results){
					if (results == true) {
						console.log(author, 'is subscribed!');
						for (let i = 0; i < data.subPrivilege; i++) {
							raffleUsersEntered.push(author);
						}
					}
				});
			} else if (data.memberOnly.at(-1) == 1) {
				checkMember(message.authorDetails.channelId).then(function(results){
					if (results == true) {
						console.log(author, 'is a Member!');
						for (let i = 0; i < data.memberPrivilege; i++) {
							raffleUsersEntered.push(author);
						}
					}
				});
			} else {
				if (data.subPrivilege > 1 && data.subPrivilege > data.memberPrivilege) {
					checkSub(message.authorDetails.channelId).then(function(results){
						if (results == true) {
							for (let i = 0; i < data.subPrivilege; i++) {
								raffleUsersEntered.push(author);
							}
						}
					});
				} else if (data.memberPrivilege > data.subPrivilege) {
					checkMember(message.authorDetails.channelId).then(function(results){
						if (results == true) {
							for (let i = 0; i < data.memberPrivilege; i++) {
								raffleUsersEntered.push(author);
							}
						}
					});
				} else {
					raffleUsersEntered.push(author);
				}
			}
		}
	});
}

async function getChatMessages(raffleData) {
	console.log('Get chat');
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
		respond(newMessages, raffleData);
	}
	raffleStarted = true;
	console.log('Total chat messages:', chatMessages.length);
		for (let i=0;i<newMessages.length;i++) {
		console.log(printMessage(newMessages[i]));
	}
}

function printMessage(message) {
	const d = new Date();
	let hour = d.getUTCHours();
	let minutes = d.getUTCMinutes();
	let user = message.authorDetails.displayName;
	let messageText = message.snippet.displayMessage;
	return '[' + hour + ':' + minutes + '] ' + 'User: ' + user + ' | Message: ' + messageText;
}

async function postMessage(messageText, myAccount) {
	const botDoc = db.collection('bots').doc('JoJ3o');
	const doc = await botDoc.get();
	if (!doc.exists) {
		console.log('No such document!');
	} else {
		botTokens = doc.data().raffle_tokens;
	}

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

async function startTrackingChat(data) {
	console.log('Start raffle');
	postMessage('Raffle started! Type ' + data.enterMessage + ' to enter', Number(data.myAccount.at(-1)))
	interval = setInterval(function() { getChatMessages(data); }, intervalTime);
}

async function stopTrackingChat(data) {
	console.log('Stop raffle');
	clearInterval(interval);
	raffleStarted = false;
	console.log(raffleUsersEntered);
	pickWinner(data);
	raffleUsersEntered = [];
}

youtubeRaffle.startRaffle = async(data) => {
	console.log('Start');
	startTrackingChat(data);
	setTimeout(function() {stopTrackingChat(data);}, (data.duration * (60/2) * 1000));
}

function pickWinner(data) {
	let winnerArray = [];
	for (let i = 0; i < data.winnerAmount; i++) {
		if (raffleUsersEntered.length != 0) {
			const random = Math.floor(Math.random() * raffleUsersEntered.length);
			winnerArray.push(raffleUsersEntered[random]);
			if (data.duplicateWinners.at(-1) == 0) {
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

			console.log(random, data.winnerArray, data.raffleUsersEntered);
		}
	}
	console.log(winnerArray);
	postMessage('The winners of the raffle are: ' + winnerArray.join(', '), Number(data.myAccount.at(-1)))
}

checkTokens();

module.exports = youtubeRaffle;
