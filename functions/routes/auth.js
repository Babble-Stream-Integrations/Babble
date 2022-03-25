const express = require('express');
const youtubeAuth = require('../services/youtubeAuth');
const twitchAuth = require('../services/twitchAuth');

const router = express.Router();

// Youtube routes
router.get("/youtube/auth", (req, res) => {
  youtubeAuth.getCode(res);
});

router.get("/youtube/callback", (req, res) => {
  const { code } = req.query;
  youtubeAuth.getTokensWithCode(code);
  res.redirect("http://localhost:3000/rafflesettings");
});

// Twitch routes
router.get('/twitch/auth', (req, res) => {
	twitchAuth.getCode(res, req.query.addon);
});

router.get("/twitch/callback", (req, res) => {
  const code = req.query;
  console.log(code);
  twitchAuth.getTokensWithCode(res, code);
  res.redirect("http://localhost:3000/rafflesettings");
});

module.exports = router;
