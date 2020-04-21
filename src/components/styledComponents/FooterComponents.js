import styled from "styled-components";

export const Podval = styled.footer`
    background-color: ${props => props.theme.mainBackground};
    padding: 15px 20px;
    color: ${props => props.theme.secondColor};
    z-index: ${props => props.theme.z_other};
    h5, p {
        padding: 5px 0;
    }
`;