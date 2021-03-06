/* Import React */
import React from 'react'

/* Import CSS */
import './Mnav.css'

/* Import assets */
import logoImg from '../../assets/icons/BabbleLogoMinimal.png'
import { HiMenu } from 'react-icons/hi'

/* Import Dependencies */
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/* State als props */
const Mnav = ({ setIsNone, isNone }) => {
    return (
        <div className="Mnav-container">
            <Navbar id="Mnav" className="flex flex-spread Mnav-bar">
                {/* Brand Babble */}
                <Navbar.Brand className="flex flex-center logo-foreground">
                    <Link to="/">
                        <img src={ logoImg } alt="Logo" className="Mnav-icons" />
                    </Link>
                </Navbar.Brand>
                {/* Hamburger Menu */}
                <span onClick={() => setIsNone((s) => !s)} className="MhamburgerStyle flex flex-center"><HiMenu className="Mhamburger"/></span>
            </Navbar>
            {/* Navbar Zelf wanneer uitgeklapt */}
            <Navbar className="Mnav Mnav-gap flex-center flex-vertical" style={{ display: isNone ? "none" : "flex"}}>
                <Link to="/" onClick={() => { setIsNone(true)}} className="MnavLink">
                    <h2>Home</h2>
                </Link>
                <Link to="/addons" onClick={() => { setIsNone(true)}} className="MnavLink">
                    <h2>Addons</h2>
                </Link>
                <Link to="/help" onClick={() => { setIsNone(true)}} className="MnavLink">
                    <h2>Help</h2>
                </Link>
                <Link to="/login" onClick={() => { setIsNone(true)}} className="MnavLink">
                    <h2>Log In</h2>
                </Link>
            </Navbar>
        </div>
    )
}

export default Mnav
