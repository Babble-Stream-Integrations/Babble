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


/* Import Components */
import Navigation from './components/navbar/Navigation.js';
import Mnav from './components/mobilenav/Mnav.js';
import Footer from "./components/Footer/Footer.js"

//import function
import { googlelogin } from './auth/firebase.js';

/* Import Dependency */
import { Switch, Route } from 'react-router-dom';


function App() {

	/* Const voor MatchMedia met een width */
	const isPhone = useMatchMedia("(max-width:968px)", true)
	const isDesktop = useMatchMedia("(min-width:969px)",true)

	/* Mobile Navigation State */
	const [isNone, setIsNone] = useState(true)
	const [userName, setUserName] = useState('username')
	const [email, setEmail] = useState('email')
	const [profilePicture, setProfilePicture] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC')

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
								<Login setUserName = {setUserName} setEmail = {setEmail} setProfilePicture = {setProfilePicture} />
							</div>
						</div>
						<Footer />
					</Route>
					{/* Signup pagina */}
					<Route path="/signup">
						<div className="bg-color">
							{isDesktop && <Navigation />}
							{isPhone && <Mnav setIsNone={setIsNone} isNone={isNone} />}
							<div className="Mcontainer" style={{ position: isNone ? "static" : "fixed" }}>
								{/* Hier staat de content in */}
								<ProfilePage userName = {userName} email = {email} profilePicture = {profilePicture} />
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
