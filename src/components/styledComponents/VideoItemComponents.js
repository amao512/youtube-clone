import styled from "styled-components";

export const SingleVideo = styled.div`
    justify-self: center;
    width: 100%;
    border-radius: 0;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    div {
        position: relative;
        img {
            width: 100%;
            z-index: 1;
        }
        ${props => props.watch && `
            width: 100%;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, 0.8);
            }
            &::after {
                content: 'CURRENT VIDEO';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                color: #fff;
                font-size: 16px;
                font-family: ${props => props.theme.mainFont};
            }
        `}
    }
    h3 {
        color: ${props => props.theme.videoItemColor};
        font-size: ${props => props.theme.videoFontSize};
        padding: 5px 10px;
    }
    p, span {
        color: ${props => props.theme.secondColor};
        font-size: ${props => props.theme.videoFontSize};
        padding: 0 10px;
    }
`;