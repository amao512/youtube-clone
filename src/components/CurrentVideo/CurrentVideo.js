import React from 'react';
import { Wrapper } from '../styledComponents';
import { Video, VideoInfo } from '../styledComponents/CurrentVideoComponents';
import { connect } from 'react-redux';

const CurrentVideo = ({ currentVideo }) => {
    if(!currentVideo) return <div>Loading...</div>

    return (
        <Wrapper>
            <VideoInfo>
                <Video>
                    <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                    src={`http://www.youtube.com/embed/${currentVideo.id}`}
                    frameBorder="0" autoPlay title='video' />
                </Video>

                <h3>{currentVideo.title}</h3>
                <p>{currentVideo.channelTitle}</p>
                <span> - {new Date(currentVideo.date).toDateString()}</span>
            </VideoInfo>
        </Wrapper>
    )
}

const mstp = state => ({
    currentVideo: state.videos.currentVideo,
})

export default connect(mstp)(CurrentVideo);