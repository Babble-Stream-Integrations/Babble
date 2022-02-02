import React from 'react'

/* Import CSS */
import './AddonsContent.css'

/* Import Components */
import AddonCard from '../addonCard/AddonCard.js'

/* Import Images */
import AutoTitleImg from '../../assets/img/auto-stream-title-background.png'
import SpotifyVotingImg from '../../assets/img/spotify-voting-background.png'
import SpotifyMusicPoolImg from '../../assets/img/spotify-music-pool-background.png'
import RaffleImg from '../../assets/img/raffle-background.png'
import TrendingChatImg from '../../assets/img/trending-chat-background.png'


const AddonsContent = () => {

    /* Array's platforms */
    const platformsraffle = ['Youtube', 'Twitch']
    const platformstest = ['Youtube']

    return (
        <div className="container addons-max-width title-font-size"  style={{minHeight: "calc(100vh - 53px - 2vh)"}}>
            <div className="row page-row-positioning addons-flex-gap">
                <div className="col-md-3 flex-center">
                    <div className="page-title-text">
                        Templates
                    </div>
                </div>
                <div className="col-md-6 addon-main-content">
                    <p className="addons-text-decoration addons-text-position">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, fugit nostrum! Dicta obcaecati porro autem rem qui, sint nulla provident enim necessitatibus sed officia corporis tenetur, eos eaque dolor? Delectus.
                    </p>
                    <div className="addons-addoncard-container container uni-no-padding">
                        <div className="row flex flex-center uni-no-margin addon-padding-cards addon-card-spacing">
                            <AddonCard name="Spotify Music Pool" platforms={platformsraffle} background={ SpotifyMusicPoolImg } />
                            <AddonCard name="Spotify Voting" platforms={platformstest} background={ SpotifyVotingImg } />
                        </div>
                        <div className="row flex flex-center uni-no-margin addon-padding-cards addon-card-spacing">
                            <AddonCard name="Auto Title" platforms={platformstest} background={ AutoTitleImg } />
                            <AddonCard name="Raffle" platforms={platformsraffle} background={ RaffleImg } />
                        </div>
                        <div className="row flex flex-center uni-no-margin addon-padding-cards addon-card-spacing">
                            <AddonCard name="Trending Chat" background={ TrendingChatImg }/>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>
        </div>
    )
}

export default AddonsContent
