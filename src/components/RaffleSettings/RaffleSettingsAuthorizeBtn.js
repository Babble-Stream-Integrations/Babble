import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

//style
import './RaffleSettings.css';

function RaffleSettingsAuthorizeBtn() {
	console.log('Button pressed!');
	const auth = async () => {
		fetch('babble-d6ef3/europe-west1/app/api/v1/youtube/auth', {
			method: 'GET',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(response => response.json())
		.then(data => {
			console.log('Succes: ', data);
			window.location.href = data.url;
		})
		.catch((error) => {
			console.log('Error', error);
		})
	}

	const auth2 = async () => {
		const data = {
			user: 'EBSnlWXow3YeFaWxokmnXIijgkv3',
			addon: 'MyRaffleAddon1'
		}
		fetch('babble-d6ef3/europe-west1/app/api/v1/raffle/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
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
		fetch('babble-d6ef3/europe-west1/app/api/v1/users/EBSnlWXow3YeFaWxokmnXIijgkv3/addons/MyRaffleAddon1/settings', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
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
