const functions = require('firebase-functions').region('europe-west1');
const express = require('express');

const userRoutes = require('./routes/users');
const addonRoutes = require('./routes/addons');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.urlencoded({
	extended: true
}));

// twitchService.checkChat();
app.use('/api/v1', userRoutes);
// app.use('/api/v1', addonRoutes);
// app.use('/api/v1', authRoutes);

app.get('/', (req, res) =>
	res.send('hi there handsome ;)')
);

exports.app = functions.https.onRequest(app);
