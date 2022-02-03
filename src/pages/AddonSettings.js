import React, { useEffect, useState } from 'react'

// Helpers
import { useDataFetch } from '../auth/firebase';

// Components
import AddonSettingsContent from "../components/addonSettings/AddonSettingsContent";
import AddonSettingsText from "../components/addonSettings/AddonSettingsText";
import { Container, Row, Col } from 'react-bootstrap';
import { useCreateSettings } from '../helpers/useCreateSettings';


function AddonSettings() {
	const [dataRecieved, setDataRecieved] = useState(false);
	const [getSettings, setGetSettings] = useState(false);
	const [settingsObj, setSettingsObj] = useState({});
	console.log(settingsObj)

	// const user = "EBSnlWXow3YeFaWxokmnXIijgkv2";
	// const addonname = "MyRaffleName1";

	// useEffect(() => {
	// 	const fetchsettings = () => {
	// 		fetch("")
	// 			.then((response) => response.json())
	// 			.then((data) => console.log(data))
	// 	}

	// 	fetchsettings()
	// }, [])



	let dummydata1 = {
		"announceWinners": true,
		"duplicateWinners": true,
		"duration": 1,
		"enterMessage": "!join",
		"memberOnly": false,
		"memberPrivilege": 1,
		"platform": "youtube",
		"subOnly": false,
		"subPrivilege": 2,
		"useMyAccount": false,
		"winnerAmount": 3
	};

	let currentaddonsetting = useCreateSettings(dummydata1, getSettings, settingsObj, setSettingsObj);
	// console.log(currentaddonsetting)

	return (
        <>
            <Container className="profile-max-width title-font-size">
                <Row className="page-row-positioning">
                    <Col md="3" className="flex-center">
                        <AddonSettingsText />
                    </Col>
                    <Col md="6" className="profile-page-content">
                        <AddonSettingsContent currentaddonsetting={currentaddonsetting} getSettings={getSettings} setGetSettings={setGetSettings} settingsObj={settingsObj} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddonSettings