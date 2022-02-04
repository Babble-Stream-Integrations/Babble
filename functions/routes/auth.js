const express = require('express');
const youtubeAuth = require('../services/youtubeAuth');
const twitchAuth = require('../services/twitchAuth');
const { initializeApp, getApps, getApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();
const db = getFirestore();

const router = express.Router();

// Youtube routes
router.get('/youtube/auth', (req, res) => {
	youtubeAuth.getCode(res);
});

router.get('/youtube/callback', (req, res) => {
	const {code} = req.query;
	youtubeAuth.getTokensWithCode(code);
});

// Twitch routes
router.get('/twitch/auth', (req, res) => {
	twitchAuth.getCode(res);
});

router.get('/twitch/callback', (req, res) => {
	const code = req.query;
	twitchAuth.getTokensWithCode(res, code);
});

module.exports = router;