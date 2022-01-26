import React from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'

// Helpers
import { useDynamicGrid } from '../../helpers/useDynamicGrid.js';

//components
import AddonSettingsOption1 from '../addonSettings/AddonSettingsOption1.js';
import AddonSettingsOption2 from '../addonSettings/AddonSettingsOption2.js';
import AddonSettingsOption3 from '../addonSettings/AddonSettingsOption3.js';
import AddonSettingsOption4 from '../addonSettings/AddonSettingsOption4.js';
import AddonSettingsOption5 from '../addonSettings/AddonSettingsOption5.js';
import AddonSettingsSaveButton from './AddonSettingsSaveButton.js';

//style


function ProfilePageContent() {

	let dummyarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


	let rows = useDynamicGrid(dummyarray, 6);

    return (
        <>
            <Card className="addon-settings-card">
                <Card.Body className="addon-settings-card-body">
                    {/* <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <AddonSettingsOption1 />
                        </Col>
                        <Col className="setting-option-component-margin-col">
                            <AddonSettingsOption2 />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <AddonSettingsOption3 />
                        </Col>
                        <Col className="setting-option-component-margin-col">
                            <AddonSettingsOption4 />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <AddonSettingsOption5 />
                        </Col>
                    </Row> */}

					{Object.keys(rows).map(row => {
						return (
							<Row className="setting-option-component-margin-row" key={row}>
								{rows[row].map(item => {
									return (
										<Col className="setting-option-component-margin-col">{item}</Col>
									)
								})}
							</Row>
						);
					})}

                    <Row className="setting-save-button">
                        <AddonSettingsSaveButton />
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfilePageContent
