import React from 'react'

import AddonsContent from '../components/AddonContent/AddonsContent.js';
import NoAddons from '../components/AddonContent/NoAddon.js';
import AddonLoginNeeded from '../components/AddonContent/AddonLoginNeeded.js';
import { Row } from 'react-bootstrap';

const Addons = () => {
    return (
        <>
            <Row>
                <AddonLoginNeeded />
            </Row>
            <Row>
                <AddonsContent />
            </Row>
        </>
    )
}

export default Addons
