import React from 'react';
import { connect } from 'react-redux';
import { VideoGrid } from '../styledComponents/VideoListComponents';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos }) => {

    if(!videos){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <VideoGrid>
                {videos.map((video, i) => {
                    const { snippet: { thumbnails, channelTitle, title, publishedAt }, id } = video;
                    return (
                        <VideoItem key={i} url={thumbnails.medium.url}
                                    id={id.videoId} channelTitle={channelTitle}
                                    title={title} date={publishedAt}
                        />
                    )
                })}
            </VideoGrid>
        </div>
    )
}

const mstp = state => ({
    videos: state.videos.data,
})

export default connect(mstp)(VideoList);