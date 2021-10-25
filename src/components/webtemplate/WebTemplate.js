/* Import React */
import React from 'react'

/* Import CSS */
import './WebTemplate.css'

/* Import Helpers */
import { useMatchMedia } from '../../helpers/useMatchMedia.js'

/* Import Components */
import Navigation from '../navbar/Navigation.js'
import Mnav from '../mobilenav/Mnav.js'

const WebTemplate = () => {

    /* Const voor MatchMedia met een width */
    const isPhone = useMatchMedia("(max-width:968px)", true)
    const isDesktop = useMatchMedia("(min-width:969px)",true )


    return (
        <div className="bg-color">
            {isDesktop && <Navigation NavWidth="6.25rem" />}
            {isPhone && <Mnav />}
            <div className="container">
                {/* Hier staat de content in */}
                <h1 style={{color: "white"}}>hallo</h1>
            </div>
        </div>
    )
}

export default WebTemplate