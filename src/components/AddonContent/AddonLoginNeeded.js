import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import YourAddonsText from '../addonContent/YourAddonsText.js';
import AddonLoginNeededContent from '../addonContent/AddonLoginNeededContent.js';

function AddonLoginNeeded() {
    return (
        <Container className="H-max-width">
            <Row className="page-row-positioning">
                <Col md="3" className="help-text flex-center">
                    <YourAddonsText />
                </Col>
                <Col md="6" className="addon-main-content">
                    <AddonLoginNeededContent />
                </Col>
                <div className="col-md-3"></div>
            </Row>
            
        </Container>
    )
}

export default AddonLoginNeeded
