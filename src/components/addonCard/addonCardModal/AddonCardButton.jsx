import { useState } from "react"



export const AddonCardButton = (madeAddon) => {
	const [buttonText, setButtonText] = useState('customize');

	if (madeAddon) {
		return (
			<a href="http://localhost:3000/addonsettings"><button className="uni-allcaps addoncard-modal-button">Settings or Start</button></a>
		)
	}

	return (
		<button className="uni-allcaps addoncard-modal-button" disabled={ false }>Customize</button>
	)
}