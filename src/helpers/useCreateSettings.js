import AddonSettingsOption1 from '../components/addonSettings/AddonSettingsOption1.js';
import AddonSettingsOption2 from '../components/addonSettings/AddonSettingsOption2.js';
import AddonSettingsOption3 from '../components/addonSettings/AddonSettingsOption3.js';
import AddonSettingsOption4 from '../components/addonSettings/AddonSettingsOption4.js';
import AddonSettingsOption5 from '../components/addonSettings/AddonSettingsOption5.js';

export const useCreateSettings = (data) => {
	let SettingsArray = [];

	for(const i in data){
		// console.log(i, data[i]);
		// console.log(SettingsArray)
		// console.log(typeof(data[i]));
		if (typeof(data[i]) === "boolean") {
			// console.log('bool')
			// let boolsetting = <AddonSettingsOption2 title=i />
			SettingsArray.push(<AddonSettingsOption2 title={i} initialValue={data[i]} />)
			// console.log.apply(SettingsArray.push(`<AddonSettingsOption2 title=`+i+` />`))
		} else if(typeof(data[i]) === "number") {
			// console.log('number')
			SettingsArray.push(<AddonSettingsOption1 title={i} initialValue={data[i]} />)
		} else if(typeof(data[i]) === "string") {
			if (i !== "platform") {
				SettingsArray.push(<AddonSettingsOption4 title={i} initialValue={data[i]} />)
			}
		}
	}
	return SettingsArray
}