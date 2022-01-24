import React from 'react'

import YourAddon from '../addonContent/YourAddonsText.js';
import AddonCard from '../addonCard/AddonCard.js';

//style
import '../addonCard/AddonCard.css';
import '../addonContent/AddonsContent.css';
import { Row, Col } from 'react-bootstrap';

function YourAddons() {
    return (
        <>
            <Row className="page-row-positioning">
                <Col md="3" className="help-text flex-center">
                    <YourAddon />
                </Col>

                <Col md="6" className="addon-main-content">
                    <div className="addons-addoncard-container container uni-no-padding no-addon-width">
                        <div className="row flex flex-center uni-no-margin addon-padding-cards addon-card-spacing">
                            <AddonCard />
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </>
    )
}

export default YourAddons
