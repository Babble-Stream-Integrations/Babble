import React from 'react'
import { Button } from 'react-bootstrap'

//style
import './RaffleSettings.css';

function RaffleSettingsSubmitBtn() {
    return (
        <>
            <Button onClick={() => {
				const data = {}
                // let data = {
                //     path: (users, user, settings, MyRaffleName1),
				// 	dataa: {}
                // }
                fetch('babble-d6ef3/europe-west1/app/api/post', {
                    method: 'POST',
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


            }} className="submit-button">
                SUBMIT
            </Button>
        </>
    )
}

export default RaffleSettingsSubmitBtn
