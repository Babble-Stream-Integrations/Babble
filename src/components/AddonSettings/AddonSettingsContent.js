import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'

// Helpers
import { getDynamicGrid } from '../../helpers/getDynamicGrid.js';
import { getCreateSettings } from '../../helpers/getCreateSettings';
//components
import AddonSettingsSaveButton from './AddonSettingsSaveButton.js';

//style


function AddonSettingsContent() {
	const [loading, isLoading] = useState(false);
	const [getSettings, setGetSettings] = useState(false);
	const [settingsObj, setSettingsObj] = useState({});
	const [retrievedData, setRetrievedData] = useState(null);

	const user = "EBSnlWXow3YeFaWxokmnXIijgkv3";
	const addonname = "MyRaffleAddon1";

	useEffect(() => {
		const fetchsettingsdata = async () => {
			fetch(`/babble-d6ef3/europe-west1/app/api/v1/users/${user}/addons/${addonname}/settings`, {
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
		fetchsettingsdata().then(() => {isLoading(true)})
	}, [])

	let currentaddonsetting = getCreateSettings(retrievedData, getSettings, settingsObj, setSettingsObj);
	let rows = getDynamicGrid(currentaddonsetting, 2);

	return (
		<>
			<Card className="addon-settings-card">
				<Card.Body className="addon-settings-card-body">
					{Object.keys(rows).map(row => {
						return (
							<Row className="setting-option-component-margin-row" key={row}>
								{rows[row].map(item => {
									return (
										<Col className="setting-option-component-margin-col">{item}</Col>
									)
								})}
							</Row>
						);
					})}

					<Row className="setting-save-button">
						<AddonSettingsSaveButton settingsObj={settingsObj} setGetSettings={setGetSettings}/>
					</Row>
				</Card.Body>
			</Card>
		</>
	)
}

export default AddonSettingsContent
