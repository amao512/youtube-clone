import React from 'react';
import { Podval } from '../styledComponents/FooterComponents';
import { Logo } from '../styledComponents/HeaderComponents';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <Podval>
            <Logo>
                <img src={logo} alt='logo' />
            </Logo>

            <h5>This site was created for learning React</h5>
            <p>aslnstbk - asyl.zed.han@gmail.com</p>
        </Podval>
    )
}

export default Footer;