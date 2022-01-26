import React from 'react'

import AddonsContent from '../components/addonContent/AddonsContent.js';
import NoAddons from '../components/addonContent/NoAddon.js';
import AddonLoginNeeded from '../components/addonContent/AddonLoginNeeded.js';
import { Row } from 'react-bootstrap';

const Addons = () => {
    return (
        <div className="container H-max-width">
            <Row>
                <AddonLoginNeeded />
            </Row>
            <Row>
                <AddonsContent />
            </Row>
        </div>
    )
}

export default Addons
