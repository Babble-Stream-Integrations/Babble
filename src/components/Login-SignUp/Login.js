import React, {useRef} from 'react'
import {Form, Button, Card} from "react-bootstrap"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
            <Card id="login" className="uni-bg-lg uni-text-white">
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form>
                        {/*Email input*/}
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        {/*Password input*/}
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100 mt-2" type="submit">Login</Button>
                        <div className="w-100 text-center mt-2">
                            or
                        </div>
                        <div className="w-100 text-center mt-2">
                            <Button className="w-100" type="submit"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo"/><a> Login using Google</a></Button> 
                        </div>
                        <div className="w-100 text-center mt-2">
                            Don't have an account? Register
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
