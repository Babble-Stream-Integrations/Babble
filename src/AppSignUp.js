// Styles
import './App.css';
import GlobalStyle from "./components/GlobalStyle"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'

// Components
import SignUp from './components/SignUp';

function AppSignUp() {
	return (
		<>
			<Container 
				className="d-flex align-items-center
				justify-content-center" style={{minHeight: "100vh"}}
				>
					<div className="w-100" style={{ maxWidth: '400px'}}>
						<SignUp />
					</div>
				
				<GlobalStyle />
				
			</Container>
		</>
	);
}

export default AppSignUp;