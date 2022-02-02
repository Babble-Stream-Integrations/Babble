import React from 'react'
import { Accordion } from 'react-bootstrap'

const HelpContent = () => {
	return (
		<>
			<Accordion className="help-accordion">
				<Accordion.Item className="help-accordion-item" eventKey="0">
					<Accordion.Header className="help-accordion-header">Faq #1</Accordion.Header>
					<Accordion.Body className="help-accordion-body">
						That's a good question. I have no idea
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item className="help-accordion-item" eventKey="1">
					<Accordion.Header className="help-accordion-header">Faq #2</Accordion.Header>
					<Accordion.Body className="help-accordion-body">
						That's a good question. I have no idea
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item className="help-accordion-item" eventKey="2">
					<Accordion.Header className="help-accordion-header">Faq #3</Accordion.Header>
					<Accordion.Body className="help-accordion-body">
						That's a good question. I have no idea
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}

export default HelpContent
