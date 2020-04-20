import styled from "styled-components";

export const SingleVideo = styled.div`
    justify-self: center;
    width: 100%;
    border-radius: 0;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
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

    ${props => props.watching && `background-color: red`}
`;