const functions = require('firebase-functions').region('europe-west1');
const express = require('express');
const path = require('path');

const twitchService = require('./services/twitchService');
const twitchRaffleRoutes = require('./routes/twitchRaffle').router;
const youtubeRaffleRoutes = require('./routes/youtubeRaffle');

const app = express();

app.use(express.urlencoded({
	extended: true
}));

app.use(express.static('/public'));

twitchService.checkChat();
app.use('/api/raffle/twitch', twitchRaffleRoutes);
app.use('/api/raffle/yt', youtubeRaffleRoutes);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index2.html'))
);

app.get('/api/message', (req, res) => {
	res.send({ message: 'Hello world!' });
  });

exports.app = functions.https.onRequest(app);
