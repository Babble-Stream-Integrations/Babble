import React, {useRef} from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../../auth/firebase';

/* Import Dependencies */
import { Link } from 'react-router-dom'

//style
import "./Login.css";

//firebase
// import { fblogin, googlelogin } from '../../auth/firebase.js'

function LoginContent({ setUserState}) {
    const emailRef = useRef()
    const passwordRef = useRef()

    // let login = (event) => {
    //     fblogin(emailRef, passwordRef);
    //     event.preventDefault();
    // }

	const login = () => {
		signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// console.log(user);
			// props.setUserName('test');
			// props.setEmail(user.email);
			// props.setProfilePicture(user.photoURL);
			setUserState(user.displayName, user.email, user.photoURL)
			console.log(setUserState);
			console.log(user);
			// post addData(user.email, user.displayName, user.uid);
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

    return (
		<>
			<Card id="login" className="uni-bg-lg uni-text-white rounded-border login-responsive">
				<Card.Body className="card-login-style">
					<Form /*onSubmit={login}*/>
						{/*Email input*/}
						<Form.Group id="email">
							<Form.Label className="form-text">Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required className="form-input-login-style" required/>
						</Form.Group>
						{/*Password input*/}
						<Form.Group id="password">
							<Form.Label className="form-text-login-style form-text">Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required className="form-input-login-style"/>
						</Form.Group>
							<Row className="login-responsive">
								<Col className="button-direction">
								<Button className="w-100 login-button login-margin-button" type="submit">Login</Button>
							</Col>
							<Col className="button-direction">
								<Link to='/profilepage'><Button className="w-100 mt-5 login-google-button" onClick={() =>{login()}}>
									<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" /><a> Login using Google</a>
								</Button></Link>
							</Col>
								<div className="text-center mt-5 form-text">
								Password reset
							</div>
							<div className="text-center mt-3 form-text">
								Register an account
							</div>
						</Row>

					</Form>
				</Card.Body>
			</Card>
		</>
	)
}

export default LoginContent
