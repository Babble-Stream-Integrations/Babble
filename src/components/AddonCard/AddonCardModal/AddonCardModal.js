import React from "react";
import { PropTypes } from 'prop-types'

/* Import CSS */
import '../AddonCard.css'

/* Import Dependencies */
import { Modal } from 'react-bootstrap'

/* Import Standard Image */
import StandardImage from '../../../assets/img/noimage.jpg'
import YoutubeLogo from '../../../assets/icons/youtube_social_icon_red.png'
import TwitchLogo from '../../../assets/icons/TwitchGlitchPurple.png'

/* Import Cross icon */
import { GrClose } from 'react-icons/gr'

function AddonCardModal( props ) {
    
    const {twitchShow, youtubeShow, ...rest } = props;

    return (
        <Modal
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="uni-text-white"
        >
            <Modal.Header className="addoncard-modal-header">
                <div>
                    <img src={ props.addonbackground } alt="hi" className="addoncard-modal-img" />
                    <GrClose className="addoncard-close-button-image" />
                </div>
            </Modal.Header>
            <Modal.Body className="flex flex-vertical addoncard-flex-gap addoncard-body-positioning">
                <div>
                    <h4 className="uni-allcaps addoncard-subtitle-margin">{ props.addonname }</h4>
                    <p>{ props.addondescription }</p>
                </div>
                <div>
                    <h4 className="uni-allcaps addoncard-subtitle-margin">Supported Platforms</h4>
                    <div>
                        <div style={{ display: twitchShow ? "block" : "none" }} className="flex flex-middle">
                            <img src={ TwitchLogo } alt="twitch icon" className="addoncard-platforms-picture" />
                            <h3>Twitch</h3>
                        </div>
                        <div style={{ display: youtubeShow ? "block" : "none" }} className="flex flex-middle">
                            <img src={ YoutubeLogo } alt="youtube icon" className="addoncard-platforms-picture" />
                            <h3>YouTube</h3>
                        </div>
                    </div>
                </div>
                <button className="uni-allcaps addoncard-modal-button">Customize</button>
            </Modal.Body>
        </Modal>
    );
}

AddonCardModal.propTypes = {
    addonname: PropTypes.string,
    addondescription: PropTypes.string,
}

AddonCardModal.defaultProps = {
    addonname: "No name defined",
    addondescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione quam inventore illum pariatur quaerat, quas quidem adipisci ut veritatis recusandae laborum hic debitis labore modi fugit ex temporibus quibusdam?",
    addonbackground: StandardImage,
    addonplatforms: [],
}

export default AddonCardModal