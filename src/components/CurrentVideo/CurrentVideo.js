import React from 'react';
import { Wrapper } from '../styledComponents';

const CurrentVideo = () => {
    return (
        <Wrapper>
            <iframe id="ytplayer" type="text/html" width="320" height="260"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameBorder="0" autoPlay title='video' />
        </Wrapper>
    )
}

export default CurrentVideo;