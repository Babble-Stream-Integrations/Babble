import React from 'react'
import "../Footer/Footer.css"
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            {/* <div className="container">
                <div className="row">
                    <p className="col-md text-center">
                        
                    </p>
                </div>
            </div> */}
            <Container className="main-footer">
                <Row>
                    <Col>
                        <p className="main-footer-text">
                            &copy;{new Date().getFullYear()} ©Babble stream interactions
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;
