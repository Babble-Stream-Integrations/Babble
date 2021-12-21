/* Import React */
import React from 'react'

/* Import CSS */
import './Navbar.css'

/* Import Dependencies */
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap'

/* Import assets */ 
import logoImg from '../../assets/icons/BabbleLogoMinimal.png'
import homeImg from '../../assets/icons/home.png'
import addonImg from '../../assets/icons/addon.png'
import helpImg from '../../assets/icons/help.png'
import profileImg from '../../assets/icons/profile.png' 


const Navigation = ({ setTitle }) => {
	// Declare Height state for centering navigation
	const [Height, setHeight] = useState(null);

	/* UseEffect om navbar in het midden te zetten zonder dat het logo in de weg komt */
	useEffect(() => {
		let x = document.getElementById("nav-babble-logo").offsetHeight;
		if (Height === null) {
			setHeight(x);
			console.log(x)
		}
	}, [Height]);


	return (
		<>
			<div className="nav-container">
				<Navbar className="nav-height nav-width main-nav flex-center">
					{/* Brand/Babble logo */}
					<Navbar.Brand id="nav-babble-logo" className="flex flex-center logo-foreground">
						<Link to="/">
							<img src={ logoImg } alt="Logo" className="nav-icons nav-logo" />
						</Link>
					</Navbar.Brand>
					{/* De Navbar zelf */}
					<Nav 
						className="flex flex-vertical flex-center flex-center nav-height nav-links nav-item-spacing" 
						style={{marginTop: -Height}}
					>
						<NavLink 
							exact to="/" 
							activeClassName="selected-page" 
							className="nav-icons-sizing flex flex-center" 
							onClick={() => {setTitle('Home - Babble Stream Integrations')}}
						>
							<img src={ homeImg } alt="Home" className="nav-icons" />
						</NavLink>
						<NavLink 
							to="/addons" 
							activeClassName="selected-page" 
							className="nav-icons-sizing flex flex-center"
							onClick={() => {setTitle('Addons - Babble Stream Integrations')}}
						>
							<img src={ addonImg } alt="Addons" className="nav-icons" />
						</NavLink>
						<NavLink 
							to="/help" 
							activeClassName="selected-page" 
							className="nav-icons-sizing flex flex-center"
							onClick={() => {setTitle('Help - Babble Stream Integrations')}}
						>
							<img src={ helpImg } alt="Help" className="nav-icons" />
						</NavLink>
						<NavLink 
							to="/login" 
							activeClassName="selected-page" 
							className="nav-icons-sizing flex flex-center"
							onClick={() => {setTitle('Log In - Babble Stream Integrations')}}
						>
							<img src={ profileImg } alt="Profile" className="nav-icons" />
						</NavLink>
					</Nav>
				</Navbar>
			</div>
		</>
	)
}


/* Default Props */
Navigation.defaultProps = {
	NavWidth: '8rem'
}

export default Navigation
