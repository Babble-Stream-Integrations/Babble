import React from 'react'
import { Button } from 'react-bootstrap'

function AddonSettingsSaveButton({ setGetSettings, settingsObj, user, addonname }) {

	// console.log(settingsObj)
	const putSettings = async () => {
		let data = settingsObj;
		console.log(data)
		fetch(`babble-d6ef3/europe-west1/app/api/v1/users/${user}/addons/${addonname}/settings`, {
			method: 'PUT',
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

	return (
        <>
            <Button className="save-button"
				onClick={() => {
				// firebase PUT call
				setTimeout(() => {
					putSettings().then(setGetSettings(false));
				}, 1000)

			}}>
				SAVE
            </Button>
			<Button className="save-button">
				Start Raffle
			</Button>
        </>
    )
}

export default AddonSettingsSaveButton
