import React from 'react'

import YourAddon from '../addonContent/YourAddonsText.js';

//style
import '../addonCard/AddonCard.css';
import '../addonContent/AddonsContent.css';
import { Row, Col } from 'react-bootstrap';

function NoAddon() {
    return (
        <>
            <Row className="page-row-positioning">
                <Col md="3" className="help-text flex-center">
                    <YourAddon />
                </Col>
            
                <Col md="6" className="addon-main-content">
                    <div className="addons-addoncard-container container uni-no-padding no-addon-width">
                        <div className="col-lg uni-no-padding card-shadow uni-clickable-cursor">
                            <div className="addoncard-card-container-no-addon flex flex-center">
                                <h2 className="uni-allcaps addoncard-card-h2-lg">No Addon created</h2>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default NoAddon
