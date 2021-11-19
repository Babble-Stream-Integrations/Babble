import React from 'react'

/* Import Assets */
import Img from'../../assets/img/homeimg.png'

/* Import Dependencies */
import { Link } from 'react-router-dom'

/* Import CSS */
import './HomeContent.css'

const HomeContent = () => {
    return (
        <div className="container H-max-width title-font-size">
            <div className="row page-row-positioning home-flex-gap">
                <div className="col-md-3 flex-center">
                    <h1>Welcome</h1>
                </div>
                <div className="col-md-6 flex flex-vertical home-main-content home-flex-gap">
                    <p className="home-text-positioning home-text-decoration">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus sint commodi repellendus? Esse est nam nulla adipisci, tenetur neque maxime laboriosam facere, sit, nesciunt perferendis et eaque! Aliquam, sit?
                    </p>
                    {/* Button naar Addons */}
                    <Link to="/addons"><button src={"/addons"} className="home-start-button uni-allcaps">Start Designing</button></Link>
                    <img src={ Img } alt="Filler" className="home-image"/>
                    <p className="home-text-positioning home-text-decoration">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. 
                        Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.
                    </p>
                </div>
                <div className="col-md-3 d-md test-color" />
            </div>
        </div>
    )
}

export default HomeContent
