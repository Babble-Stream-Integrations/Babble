import React from 'react'
import { Accordion } from 'react-bootstrap'

function Faq() {
    return (
        <>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Faq #1</Accordion.Header>
                    <Accordion.Body>
                        Je tering moeder test. Hallo dit is een test hoi!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Faq;