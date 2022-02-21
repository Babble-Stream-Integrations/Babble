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
	console.log({user: user, data: data});
	const doc = await db.collection('users').doc(user).set(data);
	return {result: `user ${user} added to database!`}
}

firestore.getUser = async(user) => {
	const doc = await db.collection('users').doc(user).get();
	return doc.data()
}

firestore.deleteUser = async(user) => {
	const doc = await db.collection('users').doc(user).delete();
	return {results: `user ${user} deleted from database!`}
}

// UserAddons functions
firestore.getAddons = async(user) => {
	const col = await db.collection('users').doc(user).collection('addons').get();
	return (col.docs.map(doc => doc.id))
}

firestore.addAddon = async(user, addon, data) => {
	const doc = await db.collection('users').doc(user).collection('addons').doc(addon).set(data);
	return {result: `addon ${addon} added to ${user}`}
}

firestore.getAddon = async(user, addon) => {
	const doc = await db.collection('users').doc(user).collection('addons').doc(addon).get();
	return doc.data()
}

firestore.deleteAddon = async(user, addon) => {
	const doc = await db.collection('users').doc(user).collection('addons').doc(addon).delete();
	return {result: `addon ${addon} deleted from ${user}`}
}

firestore.updateSettings = async(user, addon, data) => {
	const doc = await db.collection('users').doc(user).collection('addons').doc(addon).set({
		settings: data
	}, {merge: true});
	return {result: `addon ${addon} updated in ${user}`}
}

firestore.getSettings = async(user, addon) => {
	const doc = await db.collection('users').doc(user).collection('addons').doc(addon).get('settings');
	return doc.data().settings;
}

// UserToken functions
firestore.getTokens = async(user) => {
	const col = await db.collection('users').doc(user).collection('tokens').get();
	return (col.docs.map(doc => doc.id))
}

firestore.addToken = async(user, platform, data) => {
	const doc = await db.collection('users').doc(user).collection('tokens').doc(platform).set(data);
	return {result: `${platform} tokens added to ${user}`}
}

firestore.getToken = async(user, platform) => {
	const doc = await db.collection('users').doc(user).collection('tokens').doc(platform).get();
	return doc.data()
}

firestore.deleteToken = async(user, platform) => {
	const doc = await db.collection('users').doc(user).collection('tokens').doc(platform).delete();
	return {result: `${platform} tokens deleted from ${user}`}
}

module.exports = firestore;
