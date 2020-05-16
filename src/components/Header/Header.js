import React, { useState } from 'react';
import { HeaderComponent, Logo, SearchForm, ShowForm } from '../styledComponents/HeaderComponents';
import logo from '../../assets/logo.svg';
import { connect } from 'react-redux';
import { changeSearchTerm, closeCurrentVideo } from '../../redux/actions';
import {  searchData } from '../../redux/thunks';

const Header = ({ searchTerm, changeSearchTerm, searchData, closeCurrentVideo }) => {
    const [form, setForm] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        searchData(e.target.searchTerm.value)

        if(!e.target.searchTerm.value.trim()){
            setForm(false);
        }
    }

    return (
        <HeaderComponent showForm={form}>
            <Logo showForm={form} onClick={() => {
                searchData(''); 
                closeCurrentVideo();
                setForm(false);
            }}>
                <img src={logo} alt='logo' />
                <h3>YouTube</h3>
                <span>CLONE</span>
            </Logo>

            <SearchForm onSubmit={handleSubmit} showForm={form}>
                <input type='text' placeholder='Search' value={searchTerm}
                       name='searchTerm' onChange={e => changeSearchTerm(e.target.value)} 
                />
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

const mstp = state => ({
    searchTerm: state.videos.searchTerm,
})

export default connect(mstp, { changeSearchTerm, searchData, closeCurrentVideo })(Header);