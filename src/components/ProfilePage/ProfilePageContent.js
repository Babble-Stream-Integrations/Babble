import React, { useState } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import { authContext } from '../../auth/authContext'

import testlogo from "../../assets/img/test-profile-picture.png"
import { render } from '@testing-library/react'
//style

function ProfilePageContent(props) {
		return (
			<authContext.Consumer>{(context) => {
				const { userName, email, profilePicture} = context

			return(
			<>
				<Card className="profile-card">
					<Card.Body className="profile-card-body">
						<div className="profile-content-wrapper">
							<div className="profile-content-title-text">
								PROFILE PICTURE
							</div>

							<Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gsRx6CRqHc5BavLtQRiJ38P1ouXRW2hWuA&usqp=CAU'} roundedCircle className="profile-picture"/>

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
			}}</authContext.Consumer>
		)

}

export default ProfilePageContent
