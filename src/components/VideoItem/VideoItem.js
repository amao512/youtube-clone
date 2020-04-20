import React from 'react';
import { SingleVideo } from '../styledComponents/VideoItemComponents';
import { setCurrentVideo } from '../../redux/videosReducer';
import { connect } from 'react-redux';

const VideoItem = ({ url, id, setCurrentVideo, channelTitle, title, date, currentVideo, watching }) => {

    if(!url) return <div>Loading...</div>
    const data = { id, channelTitle, title, date };

    return (
        <SingleVideo watching={watching} onClick={() => setCurrentVideo(data)}>
            <img src={url} alt='thumbnails' />
            <h3>{title.length >= 75 ? (title.slice(0, 75) + '...') : title}</h3>
            <p>{channelTitle}</p>
            <span>{new Date(date).toDateString()}</span>
        </SingleVideo>
    )
}

const mstp = state => ({
    currentVideo: state.videos.currentVideo,
})

export default connect(mstp, { setCurrentVideo })(VideoItem);