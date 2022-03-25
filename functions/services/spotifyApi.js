const axios = require('axios');

const spotifyApiKey = "BQBrJbRCPrChtdETCip4GeBewJwmecPlA-Wc9QgKTXDZcIeOSKUl5zb7_NVYR7yMIhuNKGGpBg99Ki5fcBW3J-5sLRJLZgBncxyp7qUBDcRta8EArlSuYuu6ndYL-cq_EpApebmKLVV-GZyGfLJ0aV7CHJEb3dMa-9oukNaAsWD8rVvGsoTSxI8"

async function getSpotifyCall() {
    try {
        const testApiCall = `https://api.spotify.com/v1`
        const response = await axios.get(testApiCall);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

getSpotifyCall()