import React, { useState } from 'react'

import YourAddon from '../addonContent/YourAddonsText.js';
import AddonCard from '../addonCard/AddonCard.js';

import RaffleImg from '../../assets/img/raffle-background.png'

//style
import '../addonCard/AddonCard.css';
import '../addonContent/AddonsContent.css';
import { Row, Col } from 'react-bootstrap';

function YourAddons() {

	const [madeAddon, setMadeAddon] = useState(true);
	const [madeAddonName, setMadeAddonName] = useState('MyRaffleAddon1')
	const platformsraffle2 = ['Youtube', 'Twitch'];

    return (
        <>
            <Row className="page-row-positioning">
                <Col md="3" className="help-text flex-center">
                    <YourAddon />
                </Col>

                <Col md="6" className="addon-main-content">
                    <div className="addons-addoncard-container container uni-no-padding no-addon-width">
                        <div className="row flex flex-center uni-no-margin addon-padding-cards addon-card-spacing">
                            <AddonCard madeAddon={madeAddon} platforms={platformsraffle2} name={madeAddonName} background={ RaffleImg }/>
                        </div>
                    </div>

                </Col>
            </Row>
        </>
    )
}

export default YourAddons
