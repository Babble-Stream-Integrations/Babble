export const useCreateSettings = (data) => {
	let SettingsArray = [];

	for(const i in data){
		// console.log(i, data[i]);
		// console.log(SettingsArray)
		// console.log(typeof(data[i]));
		if(typeof(data[i]) === "boolean"){
			// console.log('bool')
			let boolsetting = `<AddonSettingsOption2 title=`+i+` />`
			SettingsArray.push(boolsetting)
			// console.log.apply(SettingsArray.push(`<AddonSettingsOption2 title=`+i+` />`))
		}else if(typeof(data[i]) === "number") {
			// console.log('number')
			SettingsArray.push(`<AddonSettingsOption1 title=`+i+` />`)
		} else if(typeof(data[i]) === "string") {
			SettingsArray.push(`<AddonSettingsOption4 title=`+i+` />`)
		}
	}
	return SettingsArray
}