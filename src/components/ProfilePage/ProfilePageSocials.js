import React, { Component } from 'react'

class ProfilePageSocials extends Component {
    render() {

        const hasYoutube = false;
        const hasTwitch = true;
        const hasSpotify = false;        

        return (
            <>
                <div>
                    {hasYoutube ? 'has youtube' : 'doesnt have youtube'}
                </div>
                <div>
                    {hasTwitch ? 'has twitch' : 'doesnt have twitch'}
                </div>
                
                <div>
                    {hasSpotify ? 'has spotify' : 'doesnt have spotify'}
                </div>
            </>
        )
    }
}

export default ProfilePageSocials
