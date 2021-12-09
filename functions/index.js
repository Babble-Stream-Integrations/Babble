const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({
	extended: true
}));

const twitchService = require('./services/twitchService');
twitchService.checkChat();

const twitchRoutes = require('./routes/twitch').router;
app.use('/twitch', twitchRoutes);

const youtubeRoutes = require('./routes/youtube');
app.use('/yt', youtubeRoutes);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index2.html'))
);

app.get('/api/message', (req, res) => {
	res.send({ message: 'Hello world!' });
  });

exports.app = functions.https.onRequest(app);
