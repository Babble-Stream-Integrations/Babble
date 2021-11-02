// Styles
import './App.css';
import GlobalStyle from "./components/GlobalStyle"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from 'react-bootstrap'

// Components
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Faq from './components/Faq';
import AboutText from './components/AboutText'

function AppFaq() {
	return (
		<>
			<Container 
				className="d-flex align-items-center
				justify-content-center" style={{minHeight: "100vh"}}
				>
				<Row>
					<Col>
						<AboutText />
					</Col>
					<Col>
						<Faq />
					</Col>
				</Row>
				
				<GlobalStyle />
				
			</Container>
		</>
	);
}

export default AppFaq;