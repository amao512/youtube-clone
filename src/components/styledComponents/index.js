import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 720px;
    margin: 0 auto;
    margin-top: 56px;
`;

export const HeaderComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.headerBackground};
    color: #fff;
    padding: 8px 20px;
`;

export const Logo = styled.div`
    width: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    cursor: pointer;
    img {
        width: 40px;
    }
    h3 {
        font-family: ${props => props.theme.mainFont};
    }
    span {
        color: #aaa;
        font-size: 10px;
        align-self: start;
        margin-top: 10px;
        margin-left: 2px;
    }
`;