import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
	apiKey: "AIzaSyCzNQ2O8_KEF7rcupBT8gNjB0_BIE7K4ig",
	authDomain: "babble-d6ef3.firebaseapp.com",
	projectId: "babble-d6ef3",
	storageBucket: "babble-d6ef3.appspot.com",
	messagingSenderId: "608727980458",
	appId: "1:608727980458:web:02a744b7927fc8b12133d3",
	measurementId: "G-K7MPHMQNH2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export function fbsignup(email, password) {
	createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in 
		var user = userCredential.user;
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		// ..
	});
}

export function fblogin(email, password) {
	signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		var user = userCredential.user;
		console.log(user)
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
}

export function googlelogin() {
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log(user)
			// ...
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
}
