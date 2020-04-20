import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from '../styledComponents';
import { VideoGrid } from '../styledComponents/VideoListComponents';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, currentVideo }) => {

    if(!videos){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Wrapper>
            <VideoGrid>
                {videos.map((video, i) => {
                    const { snippet: { thumbnails, channelTitle, title, publishedAt }, id } = video;
                    return (
                        <VideoItem key={i} url={thumbnails.medium.url}
                                   id={id.videoId} channelTitle={channelTitle}
                                   title={title} date={publishedAt} 
                                //    watching={id.videoId === currentVideo.id}
                        />
                    )
                })}
            </VideoGrid>
        </Wrapper>
    )
}

const mstp = state => ({
    videos: state.videos.data,
    currentVideo: state.videos.currentVideo,
})

export default connect(mstp)(VideoList);