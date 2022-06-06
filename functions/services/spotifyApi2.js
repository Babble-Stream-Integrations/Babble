// import axios from 'axios';
// const qs = require('qs');

let redirect_uri =
  "http://127.0.0.1:5500/functions/services/spotifyRedirectTest.html";

let client_id = "";
let client_secret = "";

const AUTHORIZE = "https://accounts.spotify.com/authorize";

function requestAuthorization() {
  client_id = document.getElementById("clientId").value;
  client_secret = document.getElementById("clientSecret").value;
  localStorage.setItem("client_id", client_id);
  localStorage.setItem("client_secret", client_secret);

  console.log(client_id);

  let url = AUTHORIZE;
  url += "?client_id=" + client_id;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirect_uri);
  url += "&show_dialog=true";
  url +=
    "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
  window.location.href = url; // Show Spotify's authorization screen

  console.log(localStorage.getItem("refresh_token"));
}

function getCode() {
  let code = null;
  const queryString = window.location.search;
  if (queryString.length > 0) {
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get("code");
  }
  return code;
}

async function getToken() {
  const code = getCode();
  var data = new URLSearchParams();
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  data.append('redirect_uri', 'http://127.0.0.1:5500/functions/services/spotifyRedirectTest.html');
  data.append('client_id', 'f817d73abc5c47e9b9af069bca544631');
  data.append('client_secret', 'a32e61b0576d4cf691c90eaf3f3d2016');

  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

async function requestCurrentSong() {
  const response = await fetch(
    `https://api.spotify.com/v1/me/player/currently-playing`,
    {
      method: "GET",
      headers: { Authorization: "Bearer" },
    }
  );
  const data = await response.json();
  console.log(data);
}

//     try{
//         const response = await axios.get(api_url, {
//             headers: {
//                 'Authorization': `Bearer $`
//             }
//         });
//         console.log(response.data);
//     }catch(error){
//         console.log(error);
//     }
// };
