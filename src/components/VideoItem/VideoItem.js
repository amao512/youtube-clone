import React from 'react';
import { SingleVideo } from '../styledComponents/VideoItemComponents';
import { setCurrentVideo } from '../../redux/actions';
import { connect } from 'react-redux';
import loading from '../../assets/loading.gif';

const VideoItem = ({ url, id, setCurrentVideo, channelTitle, title, date, currentVideo }) => {
    return (
        <SingleVideo watch={currentVideo && currentVideo.id === id && true} 
                     onClick={() => {
                         setCurrentVideo({ id, channelTitle, title, date })
                         window.scrollTo(0, 0);
                        }}
        >
            <div>
                <img src={url || loading} alt='thumbnails' />
            </div>
            
            <h3>{title.length >= 75 ? (title.slice(0, 75) + '...') : title}</h3>
            <p>{channelTitle}</p>
            <span>{new Date(date).toDateString()}</span>
        </SingleVideo>
    )
}

const mstp = state => ({
    currentVideo: state.videos.currentVideo,
    isWatching: state.videos.isWatching,
})

export default connect(mstp, { setCurrentVideo })(VideoItem);