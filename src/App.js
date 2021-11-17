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
import LogIn from './pages/LogInMenu.js'
import SignUpMenu from './pages/SignUpMenu.js'


/* Import Components */
import Navigation from './components/navbar/Navigation.js';
import Mnav from './components/mobilenav/Mnav.js';
import Footer from "./components/Footer/Footer.js"

/* Import Dependency */
import { Switch, Route } from 'react-router-dom';

function App() {

	/* Const voor MatchMedia met een width */
    const isPhone = useMatchMedia("(max-width:968px)", true)
    const isDesktop = useMatchMedia("(min-width:969px)",true )

	/* Mobile Navigation State */
    const [isNone, setIsNone] = useState(true)

	return (
		<div className="page-container">
			<div className="content-wrap">

			  <Switch>
				  {/* Addons pagina */}
          <Route path="/addons">
            <div className="bg-color">
              {isDesktop && <Navigation NavWidth="6.25rem" />}
              {isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
              <div className="Mcontainer" style={{ position: isNone ? "absolute" : "fixed" }}>
                {/* Hier staat de content in */}
                <Addons />
              </div>
            </div>
            <Footer />
          </Route>
          {/* Help pagina */}
          <Route path="/help">
            <div className="bg-color">
              {isDesktop && <Navigation NavWidth="6.25rem" />}
              {isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
              <div className="Mcontainer" style={{ position: isNone ? "absolute" : "fixed" }}>
                {/* Hier staat de content in */}
                <Help />
              </div>
            </div>
            <Footer />
          </Route>
          {/* Login pagina */}
          <Route path="/login">
            <div className="bg-color">
              {isDesktop && <Navigation NavWidth="6.25rem" />}
              {isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
              <div className="Mcontainer" style={{ position: isNone ? "absolute" : "fixed" }}>
                {/* Hier staat de content in */}
                <LogIn />
              </div>
            </div>
            <Footer />
          </Route>
          {/* Signup pagina */}
          <Route path="/signup">
            <div className="bg-color">
              {isDesktop && <Navigation NavWidth="6.25rem" />}
              {isPhone <Mnav setIsNone={setIsNone} isNone={isNone} />}
              <div className="Mcontainer">
                {/* Hier staat de content in */}
                <SignUpMenu />
              </div>
            </div>
            <Footer />
          </Route>       
        
				  {/* Home pagina */}
				  <Route path="/">
					  <div className="bg-color">
						  {isDesktop && <Navigation NavWidth="6.25rem" />}
						  {isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
						  <div className="Mcontainer" style={{ position: isNone ? "absolute" : "fixed" }}>
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
