// Styles
import './App.css';
import GlobalStyle from "./components/GlobalStyle"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'

// Components
import Login from "./components/Login"

function AppLogin() {
	return (
		<>
			<Container 
				className="d-flex align-items-center
				justify-content-center" style={{minHeight: "100vh"}}
				>
					<div className="w-100" style={{ maxWidth: '400px'}}>
						<Login />
					</div>
				
				<GlobalStyle />
				
			</Container>
		</>
	);
}

export default AppLogin;