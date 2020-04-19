import React from 'react';
import { connect } from 'react-redux';

const VideoList = ({ videos }) => {
    console.log(videos)

    const videoList = videos.map((video, i) => {
        const {snippet: { thumbnails }} = video;
        return (
            <div key={i}>
                <img src={thumbnails.medium.url} alt='thumbnails' /> 
            </div>
        )
    })

    return (
        <div>VideoList

            {videoList}
        </div>
    )
}

const mstp = state => ({
    videos: state.videos.data
})

export default connect(mstp)(VideoList);