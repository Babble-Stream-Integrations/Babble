import React from 'react'

import { Card, Row, Col } from 'react-bootstrap';

//style
import './RaffleSettings.css'

//Buttons
import RaffleSettingsAuthorizeBtn from './RaffleSettingsAuthorizeBtn.js';
import RaffleSettingsSubmitBtn from './RaffleSettingsSubmitBtn.js';
import RaffleSettingsResetBtn from './RaffleSettingsResetBtn.js';

//Settings
import RaffleSettingsOption1 from './RaffleSettingsOption1.js';
import RaffleSettingsOption2 from './RaffleSettingsOption2.js';
import RaffleSettingsOption3 from './RaffleSettingsOption3.js';
import RaffleSettingsOption4 from './RaffleSettingsOption4.js';
import RaffleSettingsOption5 from './RaffleSettingsOption5.js';
import RaffleSettingsOption6 from './RaffleSettingsOption6.js';
import RaffleSettingsOption7 from './RaffleSettingsOption7.js';
import RaffleSettingsOption8 from './RaffleSettingsOption8.js';
import RaffleSettingsOption9 from './RaffleSettingsOption9.js';


function RaffleSettingsContent() {
    return (
        <>
            <Card className="raffle-settings-card">
                <Card.Body className="addon-settings-card-body">
                    <Row className="setting-option-component-margin-row">
                        <Col className="authorize-button-box">
                            <RaffleSettingsAuthorizeBtn />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption1 />
                        </Col>
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption2 />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption3 />
                        </Col>
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption4 />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption5 />
                        </Col>
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption6 />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption7 />
                        </Col>
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption8 />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="setting-option-component-margin-col">
                            <RaffleSettingsOption9 />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="submit-button-box">
                            <RaffleSettingsSubmitBtn />
                        </Col>
                    </Row>
                    <Row className="setting-option-component-margin-row">
                        <Col className="reset-button-box">
                            <RaffleSettingsResetBtn />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default RaffleSettingsContent
