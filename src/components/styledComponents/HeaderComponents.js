import styled from "styled-components";


export const HeaderComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.mainBackground};
    color: #fff;
    display: grid;
    align-items: center;
    z-index: ${props => props.theme.z_header};

    @media ${props => props.theme.device.mobileS}{
        padding: 8px 10px;
        grid-template-columns: 40px 1fr;
    }

    @media ${props => props.theme.device.tablet}{
        padding: 8px 40px;
        grid-template-columns: 180px 1fr;
    }
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
    @media ${props => props.theme.device.mobileS}{
        h3, span {
            display: none;
        }
    }

    @media ${props => props.theme.device.tablet} {
        h3, span {
            display: block;
        }
    }
`;

export const SearchForm = styled.form`
    justify-self: center;
    display: grid;
    grid-template-columns: minmax(120px, 480px) 65px;
    input { 
        border: none;
        padding: 2px 6px;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.88);
        background-color: #121212;
        border: 1px solid #303030;
        height: 30px;
    }
    button {
        padding: 1px 6px;
        background-color: rgba(255, 255, 255, 0.08);
        border: 1px solid #303030;
        width: 65px;
        cursor: pointer;
        outline: none;
        span {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.5);
            opacity: 0.6;
        }
        &:hover {
            span {
                opacity: 1;
            }
        }
    }
    @media ${props => props.theme.device.mobileS}{
        ${props => (
            props.showForm ? `display: grid` : `display: none;`
        )}
    }
    
    @media ${props => props.theme.device.tablet}{
        display: grid;
        margin-right: 15%;
    }
`;

export const ShowForm = styled.div`
    display: none;
    span {
        cursor: pointer;
    }
    @media ${props => props.theme.device.mobileS}{
        display: block;
        justify-self: end;
        ${props => (
            props.showForm && `display: none;`
        )}
    }

    @media ${props => props.theme.device.tablet} {
        display: none;
    }
`;