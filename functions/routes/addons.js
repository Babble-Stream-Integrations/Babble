const express = require('express');
const youtubeRaffle = require('../services/youtubeRaffle');
const twitchRaffle = require('../services/twitchRaffle');
const youtubeAutoTitle = require('../services/youtubeAutoTitle');
const twitchAutoTitle = require('../services/twitchAutoTitle');
const { initializeApp, getApps, getApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();
const db = getFirestore();

const router = express.Router();

router.post('/raffle/start', async(req, res) => {
	const doc = await db.collection('users').doc(req.body.user).collection('addons').doc(req.body.addon).get();
	if (!doc.exists) {
		throw new Error('addon document not found');
	} else if (doc.data().type != "raffle") {
		throw new Error('Wrong type of addon: expected raffle addon')
	} else {
		if (doc.data().platform === 'youtube') {
			const tokens = await db.collection('users').doc(req.body.user).collection('tokens').doc('youtube').get();
			if (!doc.exists) {
				throw new Error('youtube tokens not found');
			} else {
				youtubeRaffle.startRaffle(doc.data().settings, tokens.data());
				res.redirect('http://localhost:3000/rafflesettings');
			}
		} else if (doc.data().platform === 'twitch') {
			const tokens = await db.collection('users').doc(req.body.user).collection('tokens').doc('twitch').get();
			if (!doc.exists) {
				throw new Error('twitch tokens not found');
			} else {
				twitchRaffle.startRaffle(doc.data().settings, tokens.data());
				res.redirect('http://localhost:3000/rafflesettings');
			}
		} else {
			throw new Error('no platform detected');
		}
	}
});

router.post('/autotitle/start', async(req, res) => {
	const doc = await db.collection('users').doc(req.body.user).collection('addons').doc(req.body.addon).get();
	if (!doc.exists) {
		throw new Error('addon document not found');
	}

	if (doc.data().type != "autoStreamTitle") {
		throw new Error('Wrong type of addon: expected autoStreamTitle addon');
	}

	if (doc.data().platform === 'youtube') {
		const tokens = await db.collection('users').doc(req.body.user).collection('tokens').doc('youtube').get();
		if (!doc.exists) {
			throw new Error('youtube tokens not found');
		}
		youtubeAutoTitle.changeChannelInfo(tokens.data());
		res.redirect('http://localhost:3000/rafflesettings');
	} else if (doc.data().platform === 'twitch') {
		const tokens = await db.collection('users').doc(req.body.user).collection('tokens').doc('twitch').get();
		if (!doc.exists) {
			throw new Error('twitch tokens not found');
		}
		twitchAutoTitle.changeChannelInfo(tokens.data());
		res.redirect('http://localhost:3000/rafflesettings');
	} else {
		throw new Error('no platform detected');
	}
});

module.exports = router;
