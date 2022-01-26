import React from 'react'
import "./Footer.css"
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
                        <h4 className="footer-headtext">Socials</h4>
                        <ul className="footer-list">
                            <li>420-69-035</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="footer-headtext">Adress</h4>
                        <ul className="footer-list">
                            <li>Hoge School Utrecht</li>
                            <li>Heidelberglaan 15</li>
                            <li>Utrecht</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="footer-headtext">Lorem Ipsum</h4>
                        <ul className="footer-list">
                            <li>Lorem</li>
                            <li>Lorem Ipsum</li>
                            <li>Ipsum</li>
                        </ul>
                    </Col>
                </Row>
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
