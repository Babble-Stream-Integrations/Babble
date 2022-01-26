import React, { useState } from 'react'
import { Row, Form } from 'react-bootstrap'

//style
import './AddonSettings.css'

function AddonSettingsOption1({ title, initialValue }) {

	const [smallInputValue, setSmallInputValue] = useState(initialValue)

	// console.log(smallInputValue)

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
						className="addon-settings-form-input-small"
						defaultValue={smallInputValue}
						name={title}
						onChange={e => {
							setSmallInputValue(e.target.value)
						}}
					/>
                </Form>
            </Row>
        </>
    )
}

AddonSettingsOption1.defaultProps = {
	title: "Small input"
}

export default AddonSettingsOption1
