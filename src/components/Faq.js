import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function Faq() {
    return (
        <>
            < Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Faq #1</Accordion.Header>
                    <Accordion.Body>
                        Je tering moeder test. Hallo dit is een test hoi!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Faq #2</Accordion.Header>
                    <Accordion.Body>
                        Je tering moeder test. Hallo dit is een test hoi!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Faq #3</Accordion.Header>
                    <Accordion.Body>
                        Je tering moeder test. Hallo dit is een test hoi!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}