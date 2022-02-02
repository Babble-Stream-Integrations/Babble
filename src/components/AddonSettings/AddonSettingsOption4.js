import React, { useState } from 'react'
import { Row, Form } from 'react-bootstrap'

//style
import './AddonSettings.css'

function AddonSettingsOption4({ title, initialValue }) {

	const [largeInputValue, setLargeInputValue] = useState(initialValue)

	// console.log(largeInputValue)

    return (
        <>
            <Row>
                <div className="addon-settings-title-text uni-allcaps">
                    {title}
                </div>
            </Row>
            <Row className="addon-settings-margin">
                <Form>
                    <Form.Control
						className="addon-settings-form-input-large"
						defaultValue={largeInputValue}
						onChange={e => {
							setLargeInputValue(e.target.value)
						}}
					/>
                </Form>
            </Row>
        </>
    )
}

AddonSettingsOption4.defaultProps = {
	title: "Long input"
}

export default AddonSettingsOption4
