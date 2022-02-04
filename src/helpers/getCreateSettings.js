import AddonSettingsOption1 from '../components/addonSettings/AddonSettingsOption1.js';
import AddonSettingsOption2 from '../components/addonSettings/AddonSettingsOption2.js';
// import AddonSettingsOption3 from '../components/addonSettings/AddonSettingsOption3.js';
import AddonSettingsOption4 from '../components/addonSettings/AddonSettingsOption4.js';
// import AddonSettingsOption5 from '../components/addonSettings/AddonSettingsOption5.js';

export const getCreateSettings = (data, getSettings, settingsObj, setSettingsObj) => {
	let SettingsArray = [];

	for(const i in data){
		if (typeof(data[i]) === "boolean") {
			SettingsArray.push(<AddonSettingsOption2 title={i} initialValue={data[i]} getSettings={getSettings} setSettingsObj={setSettingsObj} />)
		} else if(typeof(data[i]) === "number") {
			SettingsArray.push(<AddonSettingsOption1 title={i} initialValue={data[i]} getSettings={getSettings} setSettingsObj={setSettingsObj}/>)
		} else if(typeof(data[i]) === "string") {
			if (i !== "platform") {
				SettingsArray.push(<AddonSettingsOption4 title={i} initialValue={data[i]} getSettings={getSettings} setSettingsObj={setSettingsObj} />)
			}
		}

	}
	return SettingsArray
}