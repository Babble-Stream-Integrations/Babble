const { default: axios } = require('axios');
const fs = require('fs');
const dotenv = require('dotenv').config();
const { initializeApp, applicationDefault, cert, getApps, getApp } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();

const db = getFirestore();

const twitchAuth = {};

const clientID = process.env.TR_CLIENTID;
const clientSecret = process.env.TR_CLIENTSECRET;
const redirectURL = process.env.TR_REDIRECTURI;
const state = process.env.TR_STATE;
const scopes = process.env.TR_SCOPES;

twitchAuth.getCode = response => {
	const authUrl = 'https://id.twitch.tv/oauth2/authorize' +
		'?response_type=' + 'code' +
		'&force_verify=' + 'true' +
		'&client_id=' + clientID +
		'&redirect_uri=' + redirectURL +
		'&scope=' + scopes +
		'&state=' + state + ''
	response.redirect(authUrl);
}

twitchAuth.getTokensWithCode = async (response, code) => {
	await axios.post('https://id.twitch.tv/oauth2/token', null,  { params: {
		client_id : clientID,
		client_secret : clientSecret,
		code : code.code,
		grant_type : 'authorization_code',
		redirect_uri : redirectURL
	} }).then(response => {
		console.log(response.data);
		process.env.TWITCH_ACCESS_TOKEN = response.data.access_token;
		try {
			fs.writeFileSync('./twitchToken.txt', response.data.refresh_token)
			//file written successfully
		} catch (err) {
			console.error(err)
		}
		db.collection('users').doc('joas.boevink@kpnmail.nl').collection('private_info').doc('twitch_tokens').set({
			raffle_refresh_token: response.data.refresh_token
		})
	})
	.catch(error => {
		console.log(error.response)
	})
}

module.exports = twitchAuth;
