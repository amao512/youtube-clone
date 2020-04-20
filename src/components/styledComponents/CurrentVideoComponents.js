import styled from "styled-components";

export const VideoInfo = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    h3 {
        color: ${props => props.theme.videoItemColor};
        font-size: 18px;
        padding: 10px 10px 5px;
    }
    p, span {
        color: ${props => props.theme.secondColor};
        font-size: ${props => props.theme.videoFontSize};
        display: inline;
    }
    p {
        padding-left: 10px;
    }

    @media ${props => props.theme.device.mobileL}{
        h3 {
            font-size: 16px;
        }
    }
`;

export const Video = styled.div`
    max-width: 100%;
    height: 360px;
    background-color: #222;
    margin-top: 56px;

    @media ${props => props.theme.device.tablet}{
        margin-top: 37px;
    }

    @media (max-width: 545px){
        height: 300px;
    }

    @media ${props => props.theme.device.mobileL}{
        height: 230px;
    }

    @media ${props => props.theme.device.mobileM}{
        height: 180px;
    }

    @media ${props => props.theme.device.mobileS}{
        height: 140px;
    }
`;