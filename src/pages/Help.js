// Styles
import "../components/Help/Help.css"

// import GlobalStyle from "../helpers/GlobalStyle.js"
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

// Components
import AboutText from '../components/Help/AboutText.js';
import AboutContent from '../components/Help/AboutContent.js';

import HelpContent from '../components/Help/HelpContent.js';
import HelpText from '../components/Help/HelpText.js';

import ContactContent from "../components/Help/ContactContent.js";
import ContactText from "../components/Help/ContactText.js";


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