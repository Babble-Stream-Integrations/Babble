/* Import React */
import React from 'react';

/* Import Helpers */
import { useMatchMedia } from './helpers/useMatchMedia.js';

/* Import React */
import './App.css';
// import GlobalStyle from './GlobalStyle.js';

/* Import Pages */
import Home from './pages/Home'
import Addons from './pages/Addons.js'
import Help from './pages/Help.js'
import LogIn from './pages/LogInMenu.js'
import SignUpMenu from './pages/SignUpMenu.js'

/* Import Components */
import Navigation from './components/navbar/Navigation.js';
import Mnav from './components/mobilenav/Mnav.js';

/* Import Dependency */
import { Switch, Route } from 'react-router-dom';

function App() {

	/* Const voor MatchMedia met een width */
    const isPhone = useMatchMedia("(max-width:968px)", true)
    const isDesktop = useMatchMedia("(min-width:969px)",true )


	return (
		<>
			<Switch>
				<Route path="/addons">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<Addons />
						</div>
					</div>
				</Route>
				<Route path="/help">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<Help />
						</div>
					</div>
				</Route>
				<Route path="/login">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<LogIn />
						</div>
					</div>
				</Route>

				<Route path="/signup">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<SignUpMenu />
						</div>
					</div>
				</Route>

				<Route path="/">
					<div className="bg-color">
						{isDesktop && <Navigation NavWidth="6.25rem" />}
						{isPhone && <Mnav />}
						<div className="container">
							{/* Hier staat de content in */}
							<Home />
						</div>
					</div>
				</Route>
			</Switch>
		</>
	);
}

export default App;
