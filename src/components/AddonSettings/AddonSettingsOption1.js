import React from 'react'
import { Row, Form } from 'react-bootstrap'

//style
import './AddonSettings.css'

function AddonSettingsOption1() {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text">
                    SETTING OPTION #1
                </div>
            </Row>
            <Row className="addon-settings-margin">
                <Form>
                    <Form.Control className="addon-settings-form-input-small"/>
                </Form>
            </Row>
        </>
    )
}

export default AddonSettingsOption1
