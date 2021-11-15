import React from 'react'

/* Import CSS */
import './AddonsContent.css'

/* Import Components */
import AddonCard from '../AddonCard/AddonCard.js'

const AddonsContent = () => {

    /* Array's platforms */
    const platformsraffle = ['Youtube', 'Twitch']
    const platformstest = ['Youtube']

    return (
        <div className="container addons-max-width title-font-size">
            <div className="row page-row-positioning addons-flex-gap">
                <div className="col-md-3 flex-center">
                    <h1>Templates</h1>
                </div>
                <div className="col-md-6">
                    <p className="addons-text-decoration">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, fugit nostrum! Dicta obcaecati porro autem rem qui, sint nulla provident enim necessitatibus sed officia corporis tenetur, eos eaque dolor? Delectus.
                    </p>
                    <div className="addons-addoncard-container container uni-no-padding">
                        <div className="row flex flex-center uni-no-padding">
                            <AddonCard name="Raffle" platforms={platformsraffle} />
                            <AddonCard platforms={platformstest} />
                        </div>
                        <div className="row flex flex-center uni-no-padding">
                            <AddonCard platforms={platformstest} />
                            <AddonCard />
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
