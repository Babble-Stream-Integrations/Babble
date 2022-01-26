
// import GlobalStyle from "../helpers/GlobalStyle.js"
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

// Components
import AboutText from '../components/help/AboutText.js';
import AboutContent from '../components/help/AboutContent.js';

import HelpContent from '../components/help/HelpContent.js';
import HelpText from '../components/help/HelpText.js';

import ContactContent from "../components/help/ContactContent.js";
import ContactText from "../components/help/ContactText.js";

// Styles
import '../components/help/Help.css';

function Help() {
	return (
		<>
			<Container className="help-max-width title-font-size">
				<Row className="page-row-positioning help-flex-gap">

					<Col md="3" className="help-text flex-center">
						<AboutText />
					</Col>
					<Col md="6" className="help-main-content">
						<AboutContent />
					</Col>
				</Row>
				<Row className="mt-5 help-flex-gap">
					<Col md="3" className="flex-center">
						<HelpText />
					</Col>
					<Col md="6" className="help-main-content">
						<HelpContent />
					</Col>
				</Row>
				<Row className="mt-5 help-flex-gap">
					<Col md="3" className="flex-center">
						<ContactText />
					</Col>
					<Col md="6" className="help-main-content">
						<ContactContent />
					</Col>
				</Row>

			</Container>
		</>
	);
}

export default Help;