import React from 'react'
import { Accordion } from 'react-bootstrap'

const HelpContent = () => {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Faq #1</Accordion.Header>
                    <Accordion.Body>
                        Finn
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Faq #2</Accordion.Header>
                    <Accordion.Body>
                        Anton
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Faq #3</Accordion.Header>
                    <Accordion.Body>
                        Je tering moeder
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default HelpContent
