const express = require('express');
const path = require('path');
const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

const router = express.Router();

const randomstring = require("randomstring");

router.post('/raffle/:USER/:NAME', async (req, res) => {
	// try {
	// 	const docRef = await setDoc(doc(db, "users", req.params.USER, "addons", randomstring.generate()), {
	// 	  	name: req.params.NAME,
	// 	});
	// 	console.log("Document written with ID: ", docRef.id);
	//   } catch (e) {
	// 	console.error("Error adding document: ", e);
	//   }
	const data = {
		"name": req.params.NAME
	  };

	  // Add a new document in collection "cities" with ID 'LA'
	  const fireres = await db.collection('users').doc(req.params.USER).collection('addons').doc(randomstring.generate()).set(data);

});

router.get('/test', async (req, res) => {res.sendFile(path.join(__dirname, '/raffleTest.html'))});
router.get('/test/value/:ID', async (req, res) => {

	res.send({result: req.params.ID})

});


module.exports = router;
