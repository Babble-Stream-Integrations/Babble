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


const Navigation = ({ NavWidth }) => {
    // Declare Height state for centering navigation
    const [Height, setHeight] = useState(null);

    useEffect(() => {
        let x = document.getElementById("nav-babble-logo").offsetHeight;
        if (Height === null) {
            setHeight(x);
            console.log(x)
        }
    }, [Height]);


    return (
        <>
            <div className="nav-container" style={{width: NavWidth}}>
                <Navbar defaultExpanded collapseOnSelect className="nav-height">
                    <Navbar.Brand id="nav-babble-logo" className="flex flex-center logo-foreground">
                        <Link to="/home">
                            <img src={ logoImg } alt="Logo" className="nav-icons nav-logo" />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="flex flex-vertical flex-center flex-center nav-height" style={{marginTop: -Height}}>
                        <NavLink to="/home" activeClassName="selected-page">
                            <img src={ homeImg } alt="Home" className="nav-icons" />
                        </NavLink>
                        <NavLink to="/addons" activeClassName="selected-page">
                            <img src={ addonImg } alt="Addons" className="nav-icons" />
                        </NavLink>
                        <NavLink to="/help" activeClassName="selected-page">
                            <img src={ helpImg } alt="Help" className="nav-icons" />
                        </NavLink>
                        <NavLink to="/login" activeClassName="selected-page">
                            <img src={ profileImg } alt="Profile" className="nav-icons" />
                        </NavLink>
                    </Nav>
                </Navbar>
            </div>
        </>
    )
}

Navigation.defaultProps = {
    NavWidth: '8rem'
}

export default Navigation
