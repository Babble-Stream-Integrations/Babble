export const getDynamicGrid = (itemlist, amountRows = 2) => {
	let SettingsRows = {};
	let SettingsCounter = 1;
	// console.log(itemlist, amountRows)

	if (itemlist != null) {


		itemlist.forEach((item, idx) => {
			SettingsRows[SettingsCounter] = SettingsRows[SettingsCounter] ? [...SettingsRows[SettingsCounter]] : [];
			if (idx % amountRows === 0 && idx !== 0) {
				SettingsCounter++
				SettingsRows[SettingsCounter] = SettingsRows[SettingsCounter] ? [...SettingsRows[SettingsCounter]] : []
				SettingsRows[SettingsCounter].push(item)
			} else {
				SettingsRows[SettingsCounter].push(item)
			}
		});
	}
	return SettingsRows
}