const { default: axios } = require('axios');
const tmi = require('tmi.js');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const appAccessToken = 'rsr1i6cybvvc8uh2obfh04hfvtzj6s';

const twitchRaffle = {};

twitchRaffle.startRaffle = async(data) => {
	console.log(data);

	console.log('Start Twitch Raffle');

	User = getUser();

	const client = new tmi.Client({
		options: {
			debug: true
		},
		identity: {
			username: process.env.TBOT_NAME,
			password: process.env.TBOT_TOKEN
		},
		channels: [ 'joj3o', 'osjesleben' ]
	});

	let raffleUsersEntered = [];
	let noDefaults = false;

	client.connect().then(() => {
		if (Object.keys(data).length === 1) {
			client.say('#osjesleben', 'Please enter default values in the Babble editor first');
			noDefaults = true;
		} else {
			client.say('#osjesleben', 'Raffle started! Type !join to enter');
		}
	});


	client.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if(self) return;

		filterMessage(channel, tags, message, data, raffleUsersEntered);
	});

	setTimeout(function() {
		if (noDefaults == true) {
			client.disconnect();
			return;
		}
		console.log(raffleUsersEntered);
		if (data.announceWinners.at(-1) === '1') {client.say('#osjesleben', 'The winners of the raffle are: ' + raffleUsersEntered.join(", "))};
		client.disconnect();
	}, (data.duration * (60/4) * 1000));
}

const filterMessage = async(channel, tags, message, data, raffleUsersEntered) => {
	if(message.toLowerCase() === data.enterMessage && !raffleUsersEntered.includes(tags.username)) {
		if (data.followOnly.at(-1) === '1') {
			axios.get('https://api.twitch.tv/helix/users/follows?from_id='+tags['user-id']+'', {
				headers: {
					Authorization : "Bearer " + appAccessToken,
					"Client-Id" : process.env.CLIENTID
				}
			}).then(response => {
				console.log(response.data)
			})
			.catch(error => {
				console.log(error.response)
			})
		} else if (data.subOnly.at(-1) === '1') {
			console.log('oi');
		} else {
			if (data.subPrivilege > 1 && data.subPrivilege > data.memberPrivilege) {
				checkSub(message.authorDetails.channelId).then(function(results){
					if (results == true) {
						for (let i = 0; i < data.subPrivilege; i++) {
							raffleUsersEntered.push(tags.username);
						}
					}
				});
			} else if (data.memberPrivilege > data.subPrivilege) {
				checkMember(message.authorDetails.channelId).then(function(results){
					if (results == true) {
						for (let i = 0; i < data.memberPrivilege; i++) {
							raffleUsersEntered.push(tags.username);
						}
					}
				});
			} else {
				raffleUsersEntered.push(tags.username);
			}
		}
	}
}

// const endRaffle = () => {
// 	console.log(raffleUsersEntered);
// 	raffleUsersEntered = [];
// }

function getUser() {
	fs.readFile('../../twitchToken.json', (err, data) => {
		if(err) {
			throw err;
		}
		console.log(data.toString());
	});
}

module.exports = twitchRaffle;
