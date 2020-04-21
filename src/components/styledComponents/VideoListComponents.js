import styled from "styled-components";

export const VideoGrid = styled.div`
    padding-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 15px;
    background-color: #fff;

    @media ${props => props.theme.device.tablet}{
        padding-top: 20px;
    }
`;