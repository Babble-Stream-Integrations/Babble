import React, {useRef} from 'react'
import { Container, Row, Col} from "react-bootstrap"

//components
import "../Login-SignUp/Login.css"
import LoginText from "./LoginText.js";
import LoginContent from './LoginContent.js';

export default function Login() {
    
    return (
        <>
            <Container className="help-max-width title-font-size">
                <Row className="page-row-positioning">
                    <Col md="3" className="login-text flex-center">
                        <LoginText />
                    </Col>
                    <Col md="5" className="login-content">
                        <LoginContent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
