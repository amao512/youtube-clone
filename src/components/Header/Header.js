import React from 'react';
import { HeaderComponent, Logo } from '../styledComponents';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <HeaderComponent>
            <Logo>
                <img src={logo} alt='logo' />
                <h3>YouTube</h3>
                <span>CLONE</span>
            </Logo>
        </HeaderComponent>
    )
}

export default Header;