import React, { Suspense, useEffect, useState } from 'react'

// Helpers
// import { useDataFetch } from '../auth/firebase';

// Components
import AddonSettingsContent from "../components/addonSettings/AddonSettingsContent";
import AddonSettingsText from "../components/addonSettings/AddonSettingsText";
import { Container, Row, Col } from 'react-bootstrap';
import { getCreateSettings } from '../helpers/getCreateSettings';


function AddonSettings() {
	const [dataRecieved, setDataRecieved] = useState(false);
	const [getSettings, setGetSettings] = useState(false);
	const [settingsObj, setSettingsObj] = useState({});
	const [retrievedData, setRetrievedData] = useState(null)
	const user = "EBSnlWXow3YeFaWxokmnXIijgkv2";
	const addonname = "MyRaffleName1";
	const currentaddonsetting = null;


	useEffect(() => {
		const fetchsettingsdata = async () => {
			fetch('/babble-d6ef3/europe-west1/app/api/v1/users/EBSnlWXow3YeFaWxokmnXIijgkv3/addons/MyRaffleAddon1', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
			})
			.then(response => response.json())
			.then(data => {
				console.log('Succes: ', data);
				setRetrievedData(data);
			})
			.catch((error) => {
				console.log('Error', error);
			})
		}

		fetchsettingsdata()
	}, [])

	if (!retrievedData === null) {
		currentaddonsetting = useCreateSettings(retrievedData, getSettings, settingsObj, setSettingsObj);
	}


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
	// console.log(dummydata1)
	// console.log(currentaddonsetting)

	return (
        <Suspense>
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
        </Suspense>
    )
}

export default AddonSettings