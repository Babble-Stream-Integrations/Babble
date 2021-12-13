/* Import React */
import React from 'react';
import { useState } from 'react';

/* Import Helpers */
import { useMatchMedia } from './helpers/useMatchMedia.js';

/* Import React */
import './App.css';
// import GlobalStyle from './GlobalStyle.js';

/* Import Pages */
import Home from './pages/Home'
import Addons from './pages/Addons.js'
import Help from './pages/Help.js'
import Login from './components/Login-SignUp/Login'
import SignUpMenu from './pages/SignUpMenu.js'
import ProfilePage from './pages/ProfilePage.js'
import AddonSettings from './pages/AddonSettings.js'


/* Import Components */
import Navigation from './components/navbar/Navigation.js';
import Mnav from './components/mobilenav/Mnav.js';
import Footer from "./components/Footer/Footer.js";

/* Import Dependency */
import { Switch, Route } from 'react-router-dom';

function App() {

	/* Const voor MatchMedia met een width */
	const isPhone = useMatchMedia("(max-width:968px)", true)
	const isDesktop = useMatchMedia("(min-width:969px)",true)

	/* Mobile Navigation State */
	const [isNone, setIsNone] = useState(true)

	return (
		<div className="page-container">
			<div className="content-wrap">
				<Switch>
					{/* Addons pagina */}
					<Route path="/addons">
						<div className="bg-color">
							{isDesktop && <Navigation />}
							{isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
							<div className="Mcontainer uni-text-white" style={{ position: isNone ? "static" : "fixed" }}>
								{/* Hier staat de content in */}
								<Addons />
							</div>
						</div>
						<Footer />
					</Route>
					{/* Help pagina */}
					<Route path="/help">
						<div className="bg-color">
							{isDesktop && <Navigation />}
							{isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
							<div className="Mcontainer" style={{ position: isNone ? "static" : "fixed" }}>
								{/* Hier staat de content in */}
								<Help />
							</div>
						</div>
						<Footer />
					</Route>
					{/* Login pagina */}
					<Route path="/login">
						<div className="bg-color">
							{isDesktop && <Navigation />}
							{isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
							<div className="Mcontainer" style={{ position: isNone ? "static" : "fixed" }}>
								{/* Hier staat de content in */}
								<Login />
							</div>
						</div>
						<Footer />
					</Route>
					{/* Signup pagina */}
					<Route path="/profilepage">
						<div className="bg-color">
							{isDesktop && <Navigation />}
							{isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
							<div className="Mcontainer" style={{ position: isNone ? "static" : "fixed" }}>
								{/* Hier staat de content in */}
								<ProfilePage />
							</div>
						</div>
						<Footer />
					</Route>
                    {/* addonsettings pagina */}
                    <Route path="/addonsettings">
                        <div className="bg-color">
                            {isDesktop && <Navigation />}
                            {isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
                            <div className="Mcontainer" style={{ position: isNone ? "static" : "fixed" }}>
                                {/* Hier staat de content in */}
                                <AddonSettings />
                            </div>
                        </div>
                        <Footer />
                    </Route>
					{/* Home pagina */}
					<Route path="/">
						<div className="bg-color">
							{isDesktop && <Navigation />}
							{isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
							<div className="Mcontainer uni-text-white" style={{ position: isNone ? "static" : "fixed" }}>
								{/* Hier staat de content in */}
								<Home />
							</div>
						</div>
						<Footer />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
