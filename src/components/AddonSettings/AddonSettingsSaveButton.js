import React from 'react'
import { Button } from 'react-bootstrap'

function AddonSettingsSaveButton({ setGetSettings, settingsObj }) {
    return (
        <>
            <Button className="save-button" onClick={() => {
				// firebase PUT call
				setGetSettings(true)
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
