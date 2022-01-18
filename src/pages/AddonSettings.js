import React from 'react'

//components
import AddonSettingsContent from "../components/addonSettings/AddonSettingsContent";
import AddonSettingsText from "../components/addonSettings/AddonSettingsText";
import { Container, Row, Col } from 'react-bootstrap';


function ProfilePage() {
    return (
        <>
            <Container className="profile-max-width title-font-size">
                <Row className="page-row-positioning">
                    <Col md="3" className="flex-center">
                        <AddonSettingsText />
                    </Col>
                    <Col md="6" className="profile-page-content">
                        <AddonSettingsContent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfilePage

