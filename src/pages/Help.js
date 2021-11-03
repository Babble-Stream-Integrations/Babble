// Styles
// import GlobalStyle from "../helpers/GlobalStyle.js"
import { Col, Container, Row } from 'react-bootstrap'

// Components
import Faq from '../components/Help/Faq';
import AboutText from '../components/Help/AboutText'

function Help() {
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
				
				{/* <GlobalStyle /> */}
				
			</Container>
		</>
	);
}

export default Help;