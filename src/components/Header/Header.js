import React, { useState } from 'react';
import { HeaderComponent, Logo, SearchForm, ShowForm } from '../styledComponents/HeaderComponents';
import logo from '../../assets/logo.svg';

const Header = () => {
    const [form, setForm] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <HeaderComponent showForm={form}>
            <Logo showForm={form}>
                <img src={logo} alt='logo' />
                <h3>YouTube</h3>
                <span>CLONE</span>
            </Logo>

            <SearchForm onSubmit={handleSubmit} showForm={form} onBlur={() => setForm(false)}>
                <input type='text' placeholder='Search' name='searchTerm' />
                <button>
                    <span className="material-icons">search</span>
                </button>
            </SearchForm>

            <ShowForm onClick={() => setForm(true)} showForm={form} >
                <span className="material-icons">search</span>
            </ShowForm>
        </HeaderComponent>
    )
}

export default Header;