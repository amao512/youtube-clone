import React from 'react';
import { Video, VideoContainer } from '../styledComponents/CurrentVideoComponents';
import { connect } from 'react-redux';

const CurrentVideo = ({ currentVideo }) => {
    if(!currentVideo) return <div>Loading...</div>

    return (
        <VideoContainer>
            <Video>
                <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                src={`http://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                frameBorder="0" allowFullScreen autoPlay title='video' />
            </Video>

            <h3>{currentVideo.title}</h3>
            <p>{currentVideo.channelTitle}</p>
            <span> - {new Date(currentVideo.date).toDateString()}</span>
        </VideoContainer>
    )
}

const mstp = state => ({
    currentVideo: state.videos.currentVideo,
})

export default connect(mstp)(CurrentVideo);