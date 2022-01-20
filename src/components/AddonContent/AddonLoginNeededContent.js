import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'

//style
import '../addonCard/AddonCard.css';

function AddonLoginNeededContent() {
    return (
        <>
            <Card id="login" className="uni-bg-lg rounded-border login-responsive card-shadow">
                <Card.Body className="card-login-style">
                    <Row>
                        <div className="login-needed-text flex-center">
                            Login to your account to manage your addons
                        </div>
                    </Row>
                    <Row>
                        <Button className="login-google-button-addon login-needed-button-alignment">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" /><a> Login using Google</a>
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddonLoginNeededContent
