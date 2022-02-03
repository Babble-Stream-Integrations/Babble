import React from 'react'
import { Button } from 'react-bootstrap'

//style
import './RaffleSettings.css';

function RaffleSettingsAuthorizeBtn() {
	console.log('Button pressed!');
	const auth = async () => {
		let data = {
			displayName: 'Yoass',
			email: 'joas.boevink@kpnmail.nl'
		}
		fetch('babble-d6ef3/europe-west1/app/api/v1/users/JoJo123', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then(response => response.json())
		.then(data => {
			console.log('Succes: ', data);
		})
		.catch((error) => {
			console.log('Error', error);
		})
	}

	const auth2 = async () => {
		let data = {
			displayName: 'Yoass',
			email: 'joas.boevink@kpnmail.nl'
		}
		fetch('babble-d6ef3/europe-west1/app/api/v1/users/JoJo123', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then(response => response.json())
		.then(data => {
			console.log('Succes: ', data);
		})
		.catch((error) => {
			console.log('Error', error);
		})
	}

	const auth3 = async () => {
		let data = {
			displayName: 'Yoass',
			email: 'joas.boevink@kpnmail.nl'
		}
		fetch('babble-d6ef3/europe-west1/app/api/v1/users/JoJo123', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then(response => response.json())
		.then(data => {
			console.log('Succes: ', data);
		})
		.catch((error) => {
			console.log('Error', error);
		})
	}

    return (
        <>
            <Button className="authorize-button" onClick={() =>{auth()}}>
                AUTHORIZE
            </Button>
			<Button className="authorize-button" onClick={() =>{auth2()}}>
                AUTHORIZE
            </Button>
			<Button className="authorize-button" onClick={() =>{auth3()}}>
                AUTHORIZE
            </Button>
        </>
    )
}

export default RaffleSettingsAuthorizeBtn
