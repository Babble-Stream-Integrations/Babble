import React from 'react'
import { Row, Form } from 'react-bootstrap'

//style
import '../addonSettings/AddonSettings.css'

function RaffleSettingsOption7() {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text">
                    Amount of winners drawn
                </div>
            </Row>
            <Row className="addon-settings-margin">
                <Form>
                    <Form.Control className="addon-settings-form-input-small" />
                </Form>
            </Row>
        </>
    )
}

export default RaffleSettingsOption7
