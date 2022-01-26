import React from 'react'
import { Row, Form } from 'react-bootstrap'

function AddonSettingsOption5({ title }) {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text">
                    {title}
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

AddonSettingsOption5.defaultProps = {
	title: "Checkbox setting"
}

export default AddonSettingsOption5
