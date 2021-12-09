const express = require('express');
const youtubeRaffle = require('../services/youtubeRaffle');

const router = express.Router();

// Youtube routes
router.get('/auth', (req, res) => {
	youtubeRaffle.getCode(res);
});

router.get('/callback', (req, res) => {
	const {code} = req.query;
	youtubeRaffle.getTokensWithCode(code);
	res.redirect('http://localhost:5000/babble-d6ef3/europe-west1/app/');
});

router.get('/find-active-chat', (req, res) => {
	youtubeRaffle.findActiveChat();
	res.redirect('http://localhost:5000/babble-d6ef3/europe-west1/app/');
});

router.post('/start', (req, res) => {
	console.log(req.body);
	youtubeRaffle.startRaffle(req.body);
	res.redirect('http://localhost:5000/babble-d6ef3/europe-west1/app/');
})

module.exports = router;
