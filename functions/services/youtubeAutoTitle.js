const { google } = require('googleapis');
const dotenv = require('dotenv').config();

const youtube = google.youtube('v3');

const clientID = process.env.YR_CLIENTID;
const clientSecret = process.env.YR_CLIENTSECRET;
const redirectURI = process.env.YR_REDIRECTURI;

const Oauth2 = google.auth.OAuth2;

const userAuth = new Oauth2(clientID, clientSecret, redirectURI);

const youtubeAutoTitle = {};

youtubeAutoTitle.changeChannelInfo = async (credentials) => {
	userAuth.setCredentials(credentials);
	const title = 'Hello handsome ;)'
	const [id, scheduledStartTime] = await getBroadcastInfo()
	changeBroadcastInfo(id, title, scheduledStartTime)
}

async function getBroadcastInfo() {
	try {
		const response = await youtube.liveBroadcasts.list({
			auth: userAuth,
			part: 'snippet',
			broadcastStatus: 'active'
		})
		return [response.data.items[0].id, response.data.items[0].snippet.scheduledStartTime];
	} catch (error) {
		console.log(error.response);
	}
}

async function changeBroadcastInfo(id, title, scheduledStartTime) {
	try {
		const response = await youtube.liveBroadcasts.update({
			auth: userAuth,
			part: 'snippet',
			resource: {
				id: id,
				snippet: {
					title: title,
					scheduledStartTime: scheduledStartTime
				}
			}
		})
	} catch (error) {
		console.log(error.response);
	}
}

module.exports = youtubeAutoTitle;
