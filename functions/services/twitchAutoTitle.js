const { default: axios } = require('axios');
const dotenv = require('dotenv').config();

const twitchAutoTitle = {};

twitchAutoTitle.changeChannelInfo = async (credentials) => {
	const accessToken = credentials.access_token;
	const id = await getStreamerId(accessToken);
	const title = 'Hello handsome ;)'
	const game = 'Counter-Strike: Global Offensive'
	changeTitle(accessToken, id, title);

	const gameId = await getGameId(accessToken, game)
	if (gameId) {
		changeGame(accessToken, id, gameId);
	}
}

async function getStreamerId(accessToken) {
	try {
		const res = await axios.get('https://api.twitch.tv/helix/users', {
			headers: {
				Authorization : 'Bearer ' + accessToken,
				'Client-Id' : process.env.TR_CLIENTID
			}
		});
		return res.data.data[0].id
	} catch (error) {
		console.log(error.response);
	}
}

async function getGameId(accessToken, game) {
	try {
		const res = await axios.get(`https://api.twitch.tv/helix/games?name=${game}`, {
			headers: {
				Authorization : 'Bearer ' + accessToken,
				'Client-Id' : process.env.TR_CLIENTID
			}
		})
		if (res.data.data.length == 0) {
			return false
		}
		return res.data.data[0].id
	} catch (error) {
		console.log(error.response);
	}
}

async function changeTitle(accessToken, id, title) {
	try {
		const res = await axios.patch('https://api.twitch.tv/helix/channels?broadcaster_id=' + id, { title: title }, {
			headers: {
				Authorization : 'Bearer ' + accessToken,
				'Client-Id' : process.env.TR_CLIENTID,
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.log(error.response);
	}
}

async function changeGame(accessToken, id, gameId) {
	try {
		const res = await axios.patch('https://api.twitch.tv/helix/channels?broadcaster_id=' + id, { game_id: gameId }, {
			headers: {
				Authorization : 'Bearer ' + accessToken,
				'Client-Id' : process.env.TR_CLIENTID,
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		console.log(error.response);
	}
}

module.exports = twitchAutoTitle;
