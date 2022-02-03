import React, { useEffect, useState } from 'react'
import { Row, Form } from 'react-bootstrap'

//style
import './AddonSettings.css'

function AddonSettingsOption2({ title, initialValue, getSettings, setSettingsObj }) {

	const [show, setShow] = useState(initialValue);
	const [switchValue, setSwitchValue] = useState(initialValue);
	// console.log(switchValue)

	useEffect(() => {
		if (getSettings === true) {
			setSettingsObj(prevSettingsObj => ({...prevSettingsObj, [title] : switchValue}))
		}
	}, [getSettings])

    return (
        <>
            <Row>
                <div className="addon-settings-title-text uni-allcaps">
                    {title}
                </div>
            </Row>
            <Row className="addon-settings-margin">
                <Form>
                    <Form.Switch className="addon-settings-title-subtext addon-settings-switch"
                        onClick={
							() => {
								setSwitchValue((s) => !s);
								setShow(!show);
							}
						}
                        label={show ? 'on' : 'off'}
                        id="custom-switch"
						defaultChecked={switchValue}
                    />
                </Form>
            </Row>
        </>
    )
}

AddonSettingsOption2.defaultProps = {
	title: "Switch setting",
	initialValue: false
}

export default AddonSettingsOption2
