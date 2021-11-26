import React from 'react'
import { Card } from 'react-bootstrap'

//style
import '../ProfilePage/ProfilePage.css'

function ProfilePageContent() {
    return (
        <>
            <Card className="profile-card">
                <Card.Body>
                    <div className="profile-content-title-text">
                        PROFILE PICTURE
                    </div>
                    <div className="profile-content-title-text">
                        USERNAME
                    </div>
                    <div className="profile-content-text padding-profile-page-content">
                        Osjesleben
                    </div>
                    <div className="profile-content-title-text">
                        EMAIL
                    </div>
                    <div className="profile-content-text">
                        jarno.akkerman@student.
                    </div>
                    <div className="profile-content-title-text">
                        CONNECTED ACCOUNTS
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfilePageContent
