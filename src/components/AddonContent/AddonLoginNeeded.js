import React from 'react'
import { Row, Col } from 'react-bootstrap'

import YourAddonsText from '../AddonContent/YourAddonsText.js';
import AddonLoginNeededContent from '../AddonContent/AddonLoginNeededContent.js';

function AddonLoginNeeded() {
    return (
        <>
            <Row className="page-row-positioning">
                <Col md="3" className="help-text flex-center">
                    <YourAddonsText />
                </Col>
                <Col md="6" className="addon-main-content">
                    <AddonLoginNeededContent />
                </Col>
            </Row>
            
        </>
    )
}

export default AddonLoginNeeded
