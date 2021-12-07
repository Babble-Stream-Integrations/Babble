import React, { useState } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'

/*Import Function */
import { googlelogin } from '../Login-SignUp/LoginFirebase.js'

import testlogo from "../../assets/img/test-profile-picture.png"
//style
const user = {};


function ProfilePageContent(props) {

    console.log(props.loginData)

    return (
        <>
            <Card className="profile-card">
                <Card.Body className="profile-card-body">
                    <div className="profile-content-wrapper">
                        <div className="profile-content-title-text">
                            PROFILE PICTURE
                        </div>

                        <Image src={user['photoURL']} roundedCircle className="profile-picture"/>

                        <div className="profile-content-title-text">
                            USERNAME
                        </div>
                        <div className="profile-content-text padding-profile-page-content">
                            Osjesleben
                        </div>
                        <div className="profile-content-title-text">
                            EMAIL
                        </div>
                        <div className="profile-content-text padding-profile-page-content">
                            jarno.akkerman@student.
                        </div>
                        <div className="profile-content-title-text">
                            CONNECTED ACCOUNTS
                        </div>
                        <div className="profile-content-text connected-accounts">
                            <Row>
                                <div>
                                    Youtube    
                                </div>                      
                            </Row>
                            <Row>
                                <div>
                                    Spotify
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    Twitch
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    Steam
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="sign-out-text flex-center">
                        Sign out
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfilePageContent
