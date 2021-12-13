const { default: axios } = require('axios');

const twitchAuth = {};

const clientID = "4l677vx5awpv96fou6fy1c68czce91";
const clientSecret = "sml05e4sz02rfncxqwk69k5kvq5f0g";
const redirectURL = "http://localhost:5000/babble-d6ef3/europe-west1/app/api/raffle/twitch/callback";
const state = "yoassboevink";
const scopes = "chat:edit chat:read";

let accessToken = null;

twitchAuth.getCode = response => {
	const authUrl = "https://id.twitch.tv/oauth2/authorize" +
		"?response_type=" + "code" +
		"&force_verify=" + "true" +
		"&client_id=" + clientID +
		"&redirect_uri=" + redirectURL +
		"&scope=" + scopes +
		"&state=" + state + ""
	response.redirect(authUrl);
}

twitchAuth.getTokensWithCode = async (response, code) => {
	console.log(code.code);
	await axios.post("https://id.twitch.tv/oauth2/token", null,  { params: {
		client_id : clientID,
		client_secret : clientSecret,
		code : code.code,
		grant_type : "authorization_code",
		redirect_uri : redirectURL
	} }).then(response => {
		console.log(response.data)
		accessToken = response.data.access_token
	})
	.catch(error => {
		console.log(error.response)
	})
}

module.exports = twitchAuth;
module.exports.accessToken = accessToken
