// Styles
import { Container } from 'react-bootstrap'

// Components
import SignUp from '../components/Login-SignUp/SignUp.js';

function SignUpMenu() {
	return (
		<>
			<Container 
				className="d-flex" style={{minHeight: "100vh"}}
				>
					<div className="w-100" style={{ maxWidth: '400px'}}>
						<SignUp />
					</div>
				
				{/* <GlobalStyle /> */}
				
			</Container>
		</>
	);
}

export default SignUpMenu;