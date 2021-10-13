/* Import React */
import React from 'react'

/* Import CSS */
import './Navbar.css'

/* Import Dependencies */
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap'

/* Import assets */ 
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import logoImg from '../../assets/icons/BabbleLogoMinimal.png'
import homeImg from '../../assets/icons/home.png'
import addonImg from '../../assets/icons/addon.png'
import helpImg from '../../assets/icons/help.png'
import profileImg from '../../assets/icons/profile.png' 


const Navigation = () => {
    return (
        <div className="nav-container flex flex-center flex-vertical">
            <Navbar defaultExpanded collapseOnSelect>
                <Navbar.Brand className="flex-top">
                    <Link to="/home" activeClassName="selected-page">
                        <img src={ logoImg } alt="Logo" className="nav-icons" />
                    </Link>
                </Navbar.Brand>
                <Nav className="flex flex-vertical flex-center">
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
    )
}

export default Navigation
