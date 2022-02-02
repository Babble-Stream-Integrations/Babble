import React from 'react'
import { Button } from 'react-bootstrap'

function AddonSettingsSaveButton() {
    return (
        <>
            <Button className="save-button" onClick={() => {
				// Data ophalen
				// firebase PUT call
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
