import React from 'react'

//style
import '../components/RaffleSettings/RaffleSettings.css'

//components
import RaffleSettingsContent from "../components/RaffleSettings/RaffleSettingsContent.js";
import RaffleSettingsText from "../components/RaffleSettings/RaffleSettingsText.js";
import { Container, Row, Col } from 'react-bootstrap';


function RaffleSettings() {
    return (
        <>
            <Container className="profile-max-width title-font-size">
                <Row className="page-row-positioning">
                    <Col md="3" className="flex-center">
                        <RaffleSettingsText />
                    </Col>
                    <Col md="6" className="raffle-settings-content">
                        <RaffleSettingsContent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RaffleSettings

