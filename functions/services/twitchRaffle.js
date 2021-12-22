const { default: axios } = require('axios');
const tmi = require('tmi.js');
const dotenv = require('dotenv').config();

const twitchRaffle = {};

twitchRaffle.startRaffle = async(data) => {
	console.log('Start Twitch Raffle');
	console.log(data);

	if (process.env.TWITCH_ACCESS_TOKEN == undefined) {
		throw new Error('No Twitch User Acess Token')
	}

	let userName = process.env.TBOT_NAME
	let userPassword = process.env.TBOT_TOKEN

	axios.get('https://api.twitch.tv/helix/users', {
		headers: {
			Authorization : "Bearer " + process.env.TWITCH_ACCESS_TOKEN,
			"Client-Id" : process.env.TR_CLIENTID
		}
	}).then(response => {
		const userChannel = '#' + response.data.data[0].login;
		userID = response.data.data[0].id;
		if (data.myAccount.at(-1) === '1') {
			userName = response.data.data[0].login;
			userPassword = 'oauth:' + process.env.TWITCH_ACCESS_TOKEN
		}

		const client = new tmi.Client({
			options: {
				debug: true
			},
			identity: {
				username: userName,
				password: userPassword
			},
			channels: [ response.data.data[0].login ]
		});

		let raffleUsersEntered = [];
		let noDefaults = false;

		client.connect().then(() => {
			if (Object.keys(data).length === 1) {
				client.say(userChannel, 'Please enter default values in the Babble editor first');
				noDefaults = true;
			} else {
				client.say(userChannel, 'Raffle started! Type !join to enter');
			}
		});


		client.on('message', (channel, tags, message, self) => {
			// Ignore echoed messages.
			if(self) return;

			if(message.toLowerCase() === data.enterMessage && !raffleUsersEntered.includes(tags.username)) {
				sortUser(data, raffleUsersEntered, tags['display-name'], tags['user-id'], userID, tags.subscriber)
			}
		});

		setTimeout(function() {
			if (noDefaults == true) {
				client.disconnect();
				return;
			}
			if (data.announceWinners.at(-1) === '1') {
				client.say(userChannel, 'The winners of the raffle are: ' + raffleUsersEntered)
				// client.say(userChannel, 'The winners of the raffle are: ' +
				// pickWinner(raffleUsersEntered, parseInt(data.winnerAmount), data.duplicateWinners).join(", "))
			};
			client.disconnect();
		}, (data.duration * (60/4) * 1000));
	})
	.catch(error => {
		console.log(error)
	})
}

function sortUser(data, raffleUsersEntered, displayName, viewerID, streamerID, isSubscribed) {
	// Subscriber, Follower or Pleb
	let status;

	// Is the viewer subscribed?
	if (isSubscribed === true) {
		console.log(displayName, 'is subscribed!');
		status = 'Subscriber'
		enterRaffle(data, raffleUsersEntered, displayName, status)
	} else {

		// Is the viewer following?
		axios.get('https://api.twitch.tv/helix/users/follows?from_id='+viewerID+'&to_id='+streamerID+'', {
			headers: {
			Authorization : "Bearer " + process.env.TWITCH_ACCESS_TOKEN,
			"Client-Id" : process.env.TR_CLIENTID
		}
		}).then(response => {
			if (response.data.total === 1) {
				// Following
				console.log(displayName, 'is following');
				status = 'Follower'
				enterRaffle(data, raffleUsersEntered, displayName, status)
			} else {
				// Not following
				console.log(displayName, 'is a pleb');
				status = 'Pleb'
				enterRaffle(data, raffleUsersEntered, displayName, status)
			}
		})
		.catch(error => {
			console.log(error)
		})
	}
}

const enterRaffle = async(data, raffleUsersEntered, displayName, status) => {

	// Subscriber only
	if (data.subOnly.at(-1) === '1') {
		if (status === 'Subscriber') {
			for (let i = 0; i < data.subPrivilege; i++) {
				raffleUsersEntered.push(displayName);
			}
		}
	// Follower only
	} else if (data.followOnly.at(-1) === '1') {
		if (status === 'Follower') {
			for (let i = 0; i < data.followPrivilege; i++) {
				raffleUsersEntered.push(displayName);
			}
		}
	// Everyone
	} else {
		if (status === 'Subscriber') {
			for (let i = 0; i < data.subPrivilege; i++) {
				raffleUsersEntered.push(displayName);
			}
		} else if (status === 'Follower') {
			for (let i = 0; i < data.followPrivilege; i++) {
				raffleUsersEntered.push(displayName);
			}
		} else if (status === 'Pleb') {
			raffleUsersEntered.push(displayName);
		}
	}
}

function pickWinner(raffleUsersEntered, winnerAmount, duplicateWinners) {
	console.log('Users entered:', raffleUsersEntered);

	let winnerArray = [];
	for (let i = 0; i < winnerAmount; i++) {
		if (raffleUsersEntered.length !== 0) {
			const random = Math.floor(Math.random() * raffleUsersEntered.length);
			winnerArray.push(raffleUsersEntered[random]);
			if (duplicateWinners.at(-1) === '0') {
				let i = 0;
				const arrayItem = raffleUsersEntered[random];
				while (i < raffleUsersEntered.length) {
					if (raffleUsersEntered[i] === arrayItem) {
						raffleUsersEntered.splice(i, 1);
					} else {
						++i;
					}
				}
			} else {
				raffleUsersEntered.splice(random, 1);
			}

		}
	}
	console.log('Winners:', winnerArray);
}

module.exports = twitchRaffle;
