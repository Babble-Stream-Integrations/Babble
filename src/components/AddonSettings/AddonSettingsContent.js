import React from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'

//components
import AddonSettingsOption1 from './AddonSettingsOption1.js';
import AddonSettingsOption2 from './AddonSettingsOption2.js';
import AddonSettingsOption3 from './AddonSettingsOption3.js';
import AddonSettingsOption4 from './AddonSettingsOption4.js';
import AddonSettingsSaveButton from './AddonSettingsSaveButton.js';

//style


function ProfilePageContent() {

    return (
        <>
            <Card className="addon-settings-card">
                <Card.Body className="addon-settings-card-body">
                    <Row className="setting-option-component-margin-row">
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
                    <Row>
                        <AddonSettingsSaveButton />
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfilePageContent
