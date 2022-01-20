import React from 'react'
import { Row, Form } from 'react-bootstrap'

function AddonSettingsOption5() {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text">
                    SETTING OPTION #4
                </div>
            </Row>
            <Row>
                <Form className="addon-settings-margin">
                    <Form.Check className='addon-settings-title-subtext'
                        enabled
                        type='checkbox'
                        label='Test'
                    />
                </Form>
            </Row>
        </>
    )
}

export default AddonSettingsOption5
