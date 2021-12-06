import React, {useRef} from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'

//style
import "../Login-SignUp/Login.css"

const LoginContent = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    
    return (
        <>
            <Card id="login" className="uni-bg-lg uni-text-white rounded-border login-responsive">
                <Card.Body className="card-login-style">
                    <Form>
                        {/*Email input*/}
                        <Form.Group id="email">
                            <Form.Label className="form-text">Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required className="form-input-login-style" required/>
                        </Form.Group>
                        {/*Password input*/}
                        <Form.Group id="password">
                            <Form.Label className="form-text-login-style form-text">Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required className="form-input-login-style"/>
                        </Form.Group>

                        <Row className="login-responsive">
                            
                            <Col className="button-direction">
                                <Button className="w-100 login-button login-margin-button sign-in-text" type="submit">Sign in</Button>
                            </Col>
                            <Col className="button-direction">
                                <Button className="w-100 login-google-button login-margin-button" type="submit"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" /><a> Login using Google</a></Button>
                            </Col>
                                
                            <div className="text-center mt-5 form-text">
                                Password reset
                            </div>
                            <div className="text-center mt-3 form-text">
                                Register an account
                            </div>
                        </Row>
                        
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default LoginContent