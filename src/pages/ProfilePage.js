import React from 'react'

//components
import ProfilePageContent from '../components/profilePage/ProfilePageContent.js';
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePageText from '../components/profilePage/ProfilePageText.js';

function ProfilePage(props) {
    return (
        <>
            <Container className="profile-max-width title-font-size">
                <Row className="page-row-positioning">
                    <Col md="3" className="flex-center">
                        <ProfilePageText />
                    </Col>
                    <Col md="6" className="profile-page-content">
                        <ProfilePageContent userName = {props.userName} email = {props.email} profilePicture = {props.profilePicture}  />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfilePage
