import React from 'react';
import { Wrapper } from '../styledComponents';

const CurrentVideo = () => {
    return (
        <Wrapper>
            <iframe id="ytplayer" type="text/html" width="480" height="260"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameBorder="0" autoPlay />
        </Wrapper>
    )
}

export default CurrentVideo;