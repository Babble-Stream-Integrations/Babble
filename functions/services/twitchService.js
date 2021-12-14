const tmi = require('tmi.js');
const { default: axios } = require('axios');

const twitchService = {};

twitchService.checkChat = () => {
	const client = new tmi.Client({
		options: {
				debug: true
		},
		identity: {
				username: 'jobodev',
				password: 'oauth:703yewp5pgp66q3n7avb6ttrdua138'
		},
		channels: [ 'joj3o', 'osjesleben' ]
	});

	client.connect();

	client.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if(self) return;

		if(message.toLowerCase() === '!startraffle') {
			// "@alca, heya!"
			client.say(channel, 'Quick Access Raffle!');
			postToRaffle();
		}
	});
}

function postToRaffle() {
	const raffleData = require('../routes/twitchRaffle').raffleData;

	axios.post('http://localhost:5000/babble-d6ef3/europe-west1/app/api/raffle/twitch/start', raffleData)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

module.exports = twitchService;
