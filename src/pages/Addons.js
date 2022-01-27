import React from 'react'

import AddonsContent from '../components/addonContent/AddonsContent.js';
import NoAddons from '../components/addonContent/NoAddon.js';
import AddonLoginNeeded from '../components/addonContent/AddonLoginNeeded.js';
import { Container, Row } from 'react-bootstrap';

const Addons = () => {
    return (
        <Container className="addons-max-width">
            <Row>
                <AddonLoginNeeded />
            </Row>
            <Row>
                <AddonsContent />
            </Row>
        </Container>
    )
}

export default Addons
