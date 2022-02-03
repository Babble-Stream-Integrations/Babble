import React from 'react'
import { Row, Dropdown } from 'react-bootstrap'

//style
import './AddonSettings.css'

function AddonSettingsOption3({ title, initialValue, getSettings }) {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text uni-allcaps">
					{title}
                </div>
            </Row>
            <Row>
                <Dropdown className="addon-settings-margin">
                    <Dropdown.Toggle className="addon-settings-dropdown-button">
                        Select
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="addon-settings-dropdown-menu">
                        <Dropdown.Item className="addon-settings-dropdown-menu-items">
                            Hoi1
                        </Dropdown.Item>
                        <Dropdown.Item className="addon-settings-dropdown-menu-items">
                            Hoi2
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
        </>
    )
}

AddonSettingsOption3.defaultProps = {
	title: "Dropdown Setting"
}

export default AddonSettingsOption3
