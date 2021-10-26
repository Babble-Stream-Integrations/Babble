/* Import React */
import React from 'react'

/* Import React */
import './App.css';

/* Import Helpers */
import { useMatchMedia } from './helpers/useMatchMedia.js'

/* Import Components */
import Navigation from './components/navbar/Navigation.js'
import Mnav from './components/mobilenav/Mnav.js'

/* Import Dependency */
import { Switch, Route } from 'react-router-dom'

function App() {

	/* Const voor MatchMedia met een width */
    const isPhone = useMatchMedia("(max-width:968px)", true)
    const isDesktop = useMatchMedia("(min-width:969px)",true )


	return (
		<div>
			<Switch>
				<Route path="/addons">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<h1 style={{color: "white"}}>Addons</h1>
						</div>
					</div>
				</Route>
				<Route path="/help">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<h1 style={{color: "white"}}>Help</h1>
						</div>
					</div>
				</Route>
				<Route path="/login">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<h1 style={{color: "white"}}>Login</h1>
						</div>
					</div>
				</Route>
				<Route path="/">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<h1 style={{color: "white"}}>Home</h1>
						</div>
					</div>
				</Route>
			</Switch>
    	</div>
	);
}

export default App;
