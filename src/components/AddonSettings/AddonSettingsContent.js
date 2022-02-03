import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'

// Helpers
import { useDynamicGrid } from '../../helpers/useDynamicGrid.js';

//components
import AddonSettingsSaveButton from './AddonSettingsSaveButton.js';

//style


function AddonSettingsContent({ currentaddonsetting, getSettings, setGetSettings, settingsObj }) {

	let rows = useDynamicGrid(currentaddonsetting, 2);

    return (
        <>
            <Card className="addon-settings-card">
                <Card.Body className="addon-settings-card-body">
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
                        <AddonSettingsSaveButton settingsObj={settingsObj} setGetSettings={setGetSettings}/>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddonSettingsContent
