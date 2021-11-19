// Styles
import '../App.css';
// import GlobalStyle from "./components/GlobalStyle"
import { Container } from 'react-bootstrap'

// Components
import Login from "../components/Login-SignUp/Login.js"

function LogIn() {
	return (
		<>
			<Container 
				className="d-flex align-items-center
				justify-content-center" style={{minHeight: "calc(100vh - 53px - 2vh)"}}
				>
					<div className="w-100" style={{ maxWidth: '400px'}}>
						<Login />
					</div>
				
				{/* <GlobalStyle /> */}
				
			</Container>
		</>
	);
}

export default LogIn;