export default function fbsignup() {
	firebase.auth().createUserWithEmailAndPassword(email, password)
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

export default function fblogin() {
	firebase.auth().signInWithEmailAndPassword(email, password)
	.then((userCredential) => {
		// Signed in
		var user = userCredential.user;
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
}

</script>