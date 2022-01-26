import React from 'react'
import { Button } from 'react-bootstrap'

//style
import './RaffleSettings.css';

function RaffleSettingsAuthorizeBtn() {
	console.log('Button pressed!');
	const auth = () => {
		fetch('/babble-d6ef3/europe-west1/app/api/function')
	}

    return (
        <>
            <Button className="authorize-button" onClick={() =>{auth()}}>
                AUTHORIZE
            </Button>
        </>
    )
}

export default RaffleSettingsAuthorizeBtn
