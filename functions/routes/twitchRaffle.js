const express = require('express');
const twitchAuth = require('../services/twitchAuth');
const twitchRaffle = require('../services/twitchRaffle');

const router = express.Router();

let raffleData = {duration: 1};

// Twitch routes
router.get('/auth', (req, res) => {
	twitchAuth.getCode(res);
});

router.get('/callback', (req, res) => {
	const code = req.query;
	console.log(code);
	twitchAuth.getTokensWithCode(code);
	res.redirect('http://localhost:5000/babble-d6ef3/europe-west1/app/');
});

router.post('/start', (req, res) => {
	if (Object.keys(req.body).length === 0) {
		twitchRaffle.startRaffle(raffleData);
	} else {
		twitchRaffle.startRaffle(req.body);
		raffleData = req.body;
	}
	res.redirect('http://localhost:5000/babble-d6ef3/europe-west1/app/');
});

module.exports.router = router;
module.exports.raffleData = raffleData;
