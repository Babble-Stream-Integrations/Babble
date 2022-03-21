const express = require('express');
const path = require('path');
const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

const router = express.Router();

const randomstring = require("randomstring");

let clients = [];

router.post('/raffle/:USER/:NAME', async (req, res) => {

	const data = {
		"uniquestring": randomstring.generate(),
		"test": "blue"
	  };

	  // Add a new document in collection "cities" with ID 'LA'
	  const fireres = await db.collection('users').doc(req.params.USER).collection('addons').doc(req.params.NAME).set(data);
	  res.send('succes')
});

router.get('/raffle', async (req, res) => {res.sendFile(path.join(__dirname, '/raffleTest.html'))});

router.get('/raffle/:USER/:ID', async (req, res) => {
	const settings = await db.collection('users').doc(req.params.USER).collection('addons').where('uniqueString', '==', req.params.ID).get();
	res.send(settings.docs.map(doc => doc.data()));
});

router.get('raffle/listen', (req, res) => {
	const headers = {
		"Content-Type": "text/event-stream",
		Connection: "keep-alive",
	};
	res.writeHead(200, headers);

	const id = Date.now();
  	const client = {
		id,
		res,
  	};
  	clients.push(client);

  	console.log(`Client connected: ${id}`);

	req.on("close", () => {
		console.log(`Client disconnected: ${id}`);
		clients = clients.filter((client) => client.id !== id);
	});

	clients.forEach((client) => {
    	client.res.write("event: start");
	});
});


module.exports = router;