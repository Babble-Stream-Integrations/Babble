const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/test', async (req, res) => {res.sendFile(path.join(__dirname, '/raffleTest.html'))});
router.get('/test/value/:ID', async (req, res) => {

	res.send({result: req.params.ID})

});


module.exports = router;
