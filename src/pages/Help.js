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
			{/* <Container fluid="xxl">
				<div className="row">
					<div className="header-text">
						<AboutText />
					</div>
					<div className="col-md-12 text-center">
						<AboutContent />
					</div>
					<div className="header-text">
						<HelpText />
					</div>
					<div className="col-md-12 text-center">
						<HelpContent />
					</div>
					<div className="header-text">
						<ContactText />
					</div>
					<div className="col-md-12 text-center">
						<ContactContent />
					</div>
				</div>
			</Container> */}
			<Container fluid="xxl">

				<Row className="pt-5">
					<Col md="2" className="help-text">
						<AboutText />
					</Col>
					<Col md="8"> 
						<AboutContent />
					</Col>
				</Row>
				<Row className="mt-5">
					<Col md="2">
						<HelpText />
					</Col>
					<Col md="8">
						<HelpContent />
					</Col>
				</Row>
				<Row className="mt-5">
					<Col md="2">
						<ContactText />
					</Col>
					<Col md="8">
						<ContactContent />
					</Col>
				</Row>
				
			</Container>
		</>
	);
}

export default Help;