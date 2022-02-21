const { google } = require('googleapis');
const dotenv = require('dotenv').config();
const { initializeApp, getApps, getApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();

const db = getFirestore();

const clientID = process.env.YR_CLIENTID;
const clientSecret = process.env.YR_CLIENTSECRET;
const redirectURI = process.env.YR_REDIRECTURI;

const scope = [
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.channel-memberships.creator'
];

const Oauth2 = google.auth.OAuth2;
const userAuth = new Oauth2(clientID, clientSecret, redirectURI);

const testUser = 'EBSnlWXow3YeFaWxokmnXIijgkv3';

const youtubeAuth = {};

youtubeAuth.getCode = response => {
	const authUrl = userAuth.generateAuthUrl({
		access_type: 'offline',
		scope
	})
	response.send({url: authUrl});
};

youtubeAuth.getTokensWithCode = async code => {
	const credentials = await userAuth.getToken(code);
	const response = db.collection('users').doc(testUser).collection('tokens').doc('youtube').set(credentials.tokens);
};

module.exports = youtubeAuth;
