import styled from "styled-components";

export const VideoGrid = styled.div`
    padding: 15px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 15px;
    background-color: #fff;
    margin-top: 20px;
`;