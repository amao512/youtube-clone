import styled from "styled-components";

export const VideoContainer = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 15px;
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

    @media ${props => props.theme.device.tablet}{
        padding-top: 20px;
    }

    @media ${props => props.theme.device.mobileS}{
        h3 {
            font-size: 16px;
        }
    }

    @media ${props => props.theme.device.tablet}{
        h3 {
            font-size: 18px;
        }
    }
`;

export const Video = styled.div`
    max-width: 100%;
    background-color: #222;

    @media ${props => props.theme.device.mobileS}{
        height: 200px;
    }

    @media ${props => props.theme.device.mobileM}{
        height: 250px;
    }

    @media ${props => props.theme.device.mobileL}{
        height: 280px;
    }

    @media ${props => props.theme.device.tablet}{
        height: 360px;
    }
`;