import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

/* Import CSS */
import './AddonCard.css'

/* Import Components */
import AddonCardModal from './AddonCardModal/AddonCardModal.js'

/* Import Standard Image */
import StandardImage from '../../assets/img/noimage.jpg'

const AddonCard = ({ name, background, platforms, description }) => {

    const [modalShow, setModalShow] = useState(false);
    const [twitchShow, setTwitchShow] = useState(false);
    const [youtubeShow, setYoutubeShow] = useState(false)


    function checkplatforms(){
        for (let i = 0; i < Object.keys(platforms).length; i++) {
            if (platforms[i] === 'Twitch') {
                setTwitchShow(true)
            } else if (platforms[i] === 'Youtube') {
                setYoutubeShow(true)
            } else {
                setTwitchShow(false)
                setYoutubeShow(false)
            }
        }
    };


    return (
        <div className="col-lg uni-no-padding addoncard-card-margin card-shadow uni-clickable-cursor">
            <div className="addoncard-card-container flex flex-center" style={{ backgroundImage: "url("+ background +")"}} onClick={() => {setModalShow(true); checkplatforms()}}>
                <h1>{ name }</h1>
            </div>

            <AddonCardModal
                show={modalShow}
                onHide={() => setModalShow(false)}

                twitchShow={ twitchShow }
                youtubeShow={ youtubeShow }
                setModalShow= { setModalShow }

                addonplatforms={ platforms }
                addonname={ name }
            />
        </div>
    )
}

AddonCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
}

AddonCard.defaultProps = {
    name: "No Name Given!",
    platforms: [],
    background: StandardImage,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit praesentium necessitatibus, mollitia ab illum esse minus alias perspiciatis maiores neque accusamus asperiores obcaecati eveniet eligendi blanditiis quia nam atque.",
}

export default AddonCard
