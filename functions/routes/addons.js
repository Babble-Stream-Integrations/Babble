const express = require('express');
const youtubeRaffle = require('../services/youtubeRaffle');
const twitchRaffle = require('../services/twitchRaffle');
const { initializeApp, getApps, getApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();
const db = getFirestore();

const router = express.Router();

router.post('/raffle/start', async(req, res) => {
	const doc = await db.collection('users').doc(req.body.user).collection('addons').doc(req.body.addon).get();
	if (!doc.exists) {
		new Error('addon document not found');
	} else {
		if (doc.data().platform === 'youtube') {
			const tokens = await db.collection('users').doc(req.body.user).collection('tokens').doc('youtube').get();
			if (!doc.exists) {
				new Error('youtube tokens not found');
			} else {
				youtubeRaffle.startRaffle(doc.data().settings, tokens.data());
			}
		} else if (doc.data().platform === 'twitch') {
			const tokens = await db.collection('users').doc(req.body.user).collection('tokens').doc('twitch').get();
			if (!doc.exists) {
				new Error('twitch tokens not found');
			} else {
				twitchRaffle.startRaffle(doc.data().settings, tokens.data().refreshToken);
			}
		} else {
			new Error('no platform detected');
		}
	}
});