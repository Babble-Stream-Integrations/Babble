import React from 'react'

//components
import ProfilePageContent from '../components/ProfilePage/ProfilePageContent.js';
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePageText from '../components/ProfilePage/ProfilePageText.js';

function ProfilePage() {
    return (
        <>
            <Container className="profile-max-width title-font-size">
                <Row className="page-row-positioning">
                    <Col md="3" className="flex-center">
                        <ProfilePageText />
                    </Col>
                    <Col md="6">
                        <ProfilePageContent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfilePage

