import React from "react";
import { PropTypes } from 'prop-types'

/* Import CSS */
import '../AddonCard.css'

/* Import Helpers */
import { useMatchMedia } from '../../../helpers/useMatchMedia.js';

/* Import Dependencies */
import { Modal } from 'react-bootstrap'

/* Import Standard Image */
import StandardImage from '../../../assets/img/noimage.jpg'
import YoutubeLogo from '../../../assets/icons/youtube_social_icon_red.png'
import TwitchLogo from '../../../assets/icons/TwitchGlitchPurple.png'

/* Import Cross icon */
import { GrClose } from 'react-icons/gr'

function AddonCardModal( props ) {
    
    const { setModalShow, twitchShow, youtubeShow, ...rest } = props;

    const PhoneSize = useMatchMedia("(max-width:968px)", true)

    return (
        <Modal
            {...rest}
            animation={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="uni-text-white"
        >
            <Modal.Header className="addoncard-modal-header">
                <div className="addoncard-modal-header-sizing">
                    <img src={ props.addonbackground } alt="addon" className="addoncard-modal-img" />
                    <GrClose className="addoncard-close-button-image" onClick={() => { setModalShow(false) }} />
                </div>
            </Modal.Header>
            <Modal.Body className="flex flex-vertical addoncard-flex-gap">
                <div className="addoncard-body-positioning">
                    <div>
                        <h4 className="uni-allcaps addoncard-subtitle-margin uni-allcaps">{ props.addonname }</h4>
                        <p>{ props.addondescription }</p>
                    </div>
                    <div>
                        <h4 className="uni-allcaps addoncard-subtitle-margin">Supported Platforms</h4>
                        <div>
                            <div style={{ display: twitchShow ? "flex" : "none" }} className="flex-middle">
                                <img src={ TwitchLogo } alt="twitch icon" className="addoncard-platforms-picture" />
                                <h3>Twitch</h3>
                            </div>
                            <div style={{ display: youtubeShow ? "flex" : "none" }} className="flex-middle">
                                <img src={ YoutubeLogo } alt="youtube icon" className="addoncard-platforms-picture" />
                                <h3>YouTube</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {PhoneSize && <button className="uni-allcaps addoncard-modal-button" disabled={ true }>Customize Desktop Only</button>}
                {!PhoneSize && <button className="uni-allcaps addoncard-modal-button" disabled={ false }>Customize</button>}
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