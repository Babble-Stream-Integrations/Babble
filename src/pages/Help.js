// Styles
// import GlobalStyle from "../helpers/GlobalStyle.js"
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

// Components
import AboutText from '../components/Help/AboutText.js';
import AboutContent from '../components/Help/AboutContent.js';

import HelpContent from '../components/Help/HelpContent.js';
import FaqText from '../components/Help/FaqText.js';

import ContactContent from "../components/Help/ContactContent.js";
import ContactText from "../components/Help/ContactText.js";


function Help() {
	return (
		<>
			<Container fluid="xxl">

				<Row className="pt-5">
					<Col md="auto">
						<AboutText />
					</Col>
					<Col className="px-5">
						<AboutContent />
					</Col>
				</Row>
				<Row className="mt-5">
					<Col md="auto">
						<FaqText />
					</Col>
					<Col className="px-5">
						<HelpContent />
					</Col>
				</Row>
				<Row className="mt-5">
					<Col md="auto">
						<ContactText />
					</Col>
					<Col className="px-5">
						<ContactContent />
					</Col>
				</Row>
				
			</Container>
		</>
	);
}

export default Help;