const functions = require('firebase-functions').region('europe-west1');
const express = require('express');

const userRoutes = require('./routes/users');
const addonRoutes = require('./routes/addons');
const authRoutes = require('./routes/auth');
const layoutRoutes = require('./routes/addonHost');

const app = express();

app.use(express.urlencoded({
	extended: true
}));

// twitchService.checkChat();
app.use('/api/v1', userRoutes);
// app.use('/api/v1', addonRoutes);
// app.use('/api/v1', authRoutes);
app.use('/api/v1', layoutRoutes);

app.get('/', (req, res) =>
	res.send('hi there handsome ;)')
);

exports.app = functions.https.onRequest(app);
