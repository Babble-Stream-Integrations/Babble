import React from 'react'
import { Row, Form } from 'react-bootstrap'

//style
import '../AddonSettings/AddonSettings.css'

function AddonSettingsOption4() {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text">
                    SETTING OPTION #4
                </div>
            </Row>
            <Row className="addon-settings-margin">
                <Form>
                    <Form.Control className="addon-settings-form-input-large"/>
                </Form>
            </Row>
        </>
    )
}

export default AddonSettingsOption4
