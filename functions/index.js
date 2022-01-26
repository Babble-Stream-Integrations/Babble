const functions = require('firebase-functions').region('europe-west1');
const express = require('express');
const path = require('path');
const { initializeApp, applicationDefault, cert, getApps, getApp } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const twitchService = require('./services/twitchService');
const twitchRaffleRoutes = require('./routes/twitchRaffle').router;
const youtubeRaffleRoutes = require('./routes/youtubeRaffle');

getApps().length === 0 ? initializeApp() : getApp();

const db = getFirestore();

const app = express();

app.use(express.urlencoded({
	extended: true
}));

app.use(express.static('/public'));

// twitchService.checkChat();
app.use('/api/raffle/twitch', twitchRaffleRoutes);
app.use('/api/raffle/yt', youtubeRaffleRoutes);

app.get('/', (req, res) =>
	res.redirect('app/api/raffle/yt')
);

app.get('/api/raffle/yt', (req, res) =>
	res.sendFile(path.join(__dirname, '../public/development/youtubeRaffle.html'))
);

app.get('/api/raffle/twitch', (req, res) =>
	res.sendFile(path.join(__dirname, '../public/development/twitchRaffle.html'))
);

app.get('/api/message', (req, res) => {
	console.log('Sofia');
	res.send({ message: 'Hello world!' });
});

app.get('/api/function', (req, res) => {
	let x = 1
	x++;
	console.log('Anton heeft zoveel ballen:', x);
});

app.post('/api/post', (req, res) => {
	console.log('postTest: ', req.body);
});

app.post('/api/adduser', (req, res) => {
	const data = {
		email: req.body.email,
		nick_name: req.body.displayName,
		user_uid: req.body.uid
		};

	// Add a new document in collection "users" with ID 'email'
	const response = db.collection('users').doc(req.body.uid).set(data);
	res.redirect('/');
});

exports.app = functions.https.onRequest(app);
