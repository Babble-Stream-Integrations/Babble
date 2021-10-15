/* Import React */
import React from 'react'

/* Import CSS */
import './WebTemplate.css'

/* Import Components */
import Navigation from '../navbar/Navigation.js'

const WebTemplate = () => {
    return (
        <div className="bg-color">
            <Navigation NavWidth="6.25rem" />
            <div className="container">
                {/* Hier staat de conten in */}
                <h1>hallo</h1>
            </div>
        </div>
    )
}

export default WebTemplate