const { initializeApp, getApps, getApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

getApps().length === 0 ? initializeApp() : getApp();
const db = getFirestore();

const firestore = {};


// User functions
firestore.getUsers = async() => {
	const col = await db.collection('users').get();
	return (col.docs.map(doc => doc.id))
}

firestore.addUser = async(user, data) => {
	const doc = await db.collection('users').doc(user).set(data);
	return {hello: "world!"}
}

firestore.getUser = async(user) => {
	const doc = await db.collection('users').doc(user).get();	
	return doc.data()
}

firestore.deleteUser = async() => {

}

// UserAddons functions
firestore.getAddons = async() => {

}

firestore.addAddon = async() => {

}

firestore.getAddon = async(user, addon) => {
	const doc = await db.collection('users').doc(user).collection('addons').doc(addon).get();
	return doc.data()
}

firestore.updateAddon = async() => {

}

firestore.deleteAddon = async() => {

}

firestore.updateSettings = async() => {

}

firestore.getSettings = async() => {

}

// UserToken functions
firestore.getTokens = async() => {

}

firestore.addToken = async() => {

}

firestore.getToken = async() => {

}

firestore.deleteToken = async() => {

}

module.exports = firestore;