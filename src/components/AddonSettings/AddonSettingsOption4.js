import React from 'react'
import { Row, Form } from 'react-bootstrap'

//style
import './AddonSettings.css'

function AddonSettingsOption4({ title, initialValue }) {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text uni-allcaps">
                    {title}
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

AddonSettingsOption4.defaultProps = {
	title: "Long input"
}

export default AddonSettingsOption4
