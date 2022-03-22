const dotenv = require('dotenv').config();
const axios = require('axios');

const steamApiKey = "CD7F830F71C20539095AED81A645EBE7"
const steamId = "76561198199000257"

async function getCurrentGameName() {
    try {
        const steamCurrentGame = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamApiKey}&steamids=${steamId}`
        const response = await axios.get(steamCurrentGame);
        const currentlyPlaying = response.data.response.players[0].gameextrainfo;
        const currentlyPlayingId = response.data.response.players[0].gameid;
        return [currentlyPlaying, currentlyPlayingId]
    } catch (error) {
        console.error(error);
    }
  }

async function getAchievementData() {
    try {
        const currentlyPlayingId = (await getCurrentGameName())[1]
        const steamAchievments = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${currentlyPlayingId}&key=${steamApiKey}&steamid=${steamId}`
        const response = await axios.get(steamAchievments);
        const achievementDataCurrentGame = response.data.playerstats.achievements;
        return achievementDataCurrentGame
    } catch (error) {
        console.error(error);
    }
  }

async function getTotalAchievements() {
    let achievedAchievements = 0;
    const achievements = await getAchievementData()

    for (let i = 0; i < achievements.length; i++) {
        const achievedBoolean = achievements[i].achieved

        if (achievedBoolean === 1) {
            achievedAchievements += 1
        }
    }

    const totalAchievements = achievements.length
    return [achievedAchievements, totalAchievements]
}

async function getStreamTitle() {
    const currentGame = (await getCurrentGameName())[0]
    const [achievedAchievements, totalAchievements] = await getTotalAchievements()

    return ` | ${currentGame} | ${achievedAchievements} / ${totalAchievements}`
}

module.exports = {getCurrentGameName, getStreamTitle}