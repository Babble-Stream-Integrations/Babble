const { default: axios } = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config()

const twitchAuth = {};

const clientID = process.env.TR_CLIENTID;
const clientSecret = process.env.TR_CLIENTSECRET;
const redirectURL = process.env.TR_REDIRECTURI;
const state = process.env.TR_STATE;
const scopes = process.env.TR_SCOPES;

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
		fs.writeFile('../../twitchToken.json', response.data, (err) => {
			if(err) {
				console.log('error');
				throw err;
			}
			console.log("Data has been written to file successfully.");
		});
	})
	.catch(error => {
		console.log(error.response)
	})
}

module.exports = twitchAuth;
