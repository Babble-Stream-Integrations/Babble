const express = require('express');
const path = require('path');
const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();
const Sse = require('../services/serverSentEvents');

const router = express.Router();

const randomstring = require("randomstring");
const clients = [];

router.get('/raffle', async (req, res) => {res.sendFile(path.join(__dirname, '/index.html'))});

// dit is een testroute
router.post('/raffle/:USER/:NAME', async (req, res) => {

	const data = {
		"uniquestring": randomstring.generate(),
		"test": "blue"
	  };

	  const fireres = await db.collection('users').doc(req.params.USER).collection('addons').doc(req.params.NAME).set(data);
	  res.send('succes');
});

router.get('/raffle/:USER/:ID', async (req, res) => {
	const settings = await db.collection('users').doc(req.params.USER).collection('addons').where('uniqueString', '==', req.params.ID).get();
	res.send(settings.docs.map(doc => doc.data()));
});

router.get('/raffle/listen', (req, res) => {
	const headers = {
		"Content-Type": "text/event-stream",
		Connection: "keep-alive",
	};
	res.writeHead(200, headers);

	const id = req.query.id;
  	const client = {
		id,
		res,
  	};
  	clients.push(client);
	const testinterval = setInterval(test, 30000);

	req.on("close", () => {
		clients = clients.filter((client) => client.id !== id);
		clearInterval(testinterval);
	});

	function test() {
		clients.forEach((client) => {
			client.res.write("event: end\n");
			client.res.write('data: ["hoi", "test"]\n\n');
		});
	}
});

module.exports = router;