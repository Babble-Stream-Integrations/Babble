const { default: axios } = require('axios');
const dotenv = require('dotenv').config();
const { initializeApp, applicationDefault, cert, getApps, getApp } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();

const db = getFirestore();

const testUser = 'EBSnlWXow3YeFaWxokmnXIijgkv3';

const twitchAuth = {};

const clientID = process.env.TR_CLIENTID;
const clientSecret = process.env.TR_CLIENTSECRET;
const redirectURL = process.env.TR_REDIRECTURI;
const state = process.env.TR_STATE;

async function getPrevScopes() {
	const scopesRef = db.collection('users').doc(testUser).collection('tokens').doc('twitch');
	const doc = await scopesRef.get();
	if (!doc.exists) {
		console.log('No scopes found!');
		return ''
	} else {
		console.log('Document data:', doc.data());
		if (!('scope' in doc.data())) {
			return ''
		}
		return doc.data().scope.join(' ');
	}
}

async function getNextScope(scope) {
	const doc = await db.collection('addons').doc(scope).get();
	if (!doc.exists) {new Error('Wrong addon specified!')};
	return doc.data().scope
}

twitchAuth.getCode = async (response, scope) => {
	const authUrl = 'https://id.twitch.tv/oauth2/authorize' +
		'?response_type=' + 'code' +
		'&force_verify=' + 'true' +
		'&client_id=' + clientID +
		'&redirect_uri=' + redirectURL +
		'&scope=' + (await getPrevScopes() + ' ' + await getNextScope(scope)) +
		'&state=' + state + ''
	response.send({url: authUrl});
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
		const res = db.collection('users').doc(testUser).collection('tokens').doc('twitch').set(response.data)
	})
	.catch(error => {
		console.log(error.response)
	})
}

module.exports = twitchAuth;
