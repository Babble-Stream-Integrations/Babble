/* Import React */
import React from 'react'

/* Import CSS */
import './WebTemplate.css'

/* Import Components */
import Navigation from '../navbar/Navigation.js'

const WebTemplate = () => {
    return (
        <div className="bg-color">
            <Navigation NavWidth="6rem" />
            <div className="container">

            </div>
        </div>
    )
}

export default WebTemplate