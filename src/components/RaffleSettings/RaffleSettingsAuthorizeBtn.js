import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//style
import "./RaffleSettings.css";

function RaffleSettingsAuthorizeBtn() {
	console.log('Button pressed!');
	// Buttone 1 authentication
	const auth = async () => {
		fetch('babble-d6ef3/europe-west1/app/api/v1/twitch/auth?addon=autoStreamTitle', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(response => response.json())
		.then(data => {
			console.log('Succes: ', data);
			window.location.href = data.url;
		})
		.catch((error) => {
			console.log('Error', error);
		})
	}
	// Buttone 2 start raffle
	const auth2 = async () => {
		const data = {
			user: 'EBSnlWXow3YeFaWxokmnXIijgkv3',
			addon: 'MyRaffleAddon2'
		}
		fetch('babble-d6ef3/europe-west1/app/api/v1/raffle/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			console.log('Succes: ', data);
		})
		.catch((error) => {
			console.log('Error', error);
		})
	}

	const auth3 = async () => {
		const data = {
			user: 'EBSnlWXow3YeFaWxokmnXIijgkv3',
			addon: 'AutoTitleTurtle'
		}
		fetch('babble-d6ef3/europe-west1/app/api/v1/autotitle/start', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			console.log('Succes: ', data);
		})
		.catch((error) => {
			console.log('Error', error);
		})
	}

    return (
        <>
            {/* <Button className="authorize-button" onClick={() =>{auth()}}>
                Authorize
            </Button>
			<Button className="authorize-button" onClick={() =>{auth2()}}>
                Start Raffle
            </Button> */}
			<Button className="authorize-button" onClick={() =>{auth3()}}>
                Change Channel Info test
            </Button>
        </>
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Succes: ", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <>
      <Button
        className="authorize-button"
        onClick={() => {
          auth();
        }}
      >
        Authorize
      </Button>
      <Button
        className="authorize-button"
        onClick={() => {
          auth2();
        }}
      >
        Start Raffle
      </Button>
      <Button
        className="authorize-button"
        onClick={() => {
          auth3();
        }}
      >
        anton
      </Button>
    </>
  );
}

export default RaffleSettingsAuthorizeBtn;
