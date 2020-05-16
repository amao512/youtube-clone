import React, { useEffect } from 'react';
import './App.css';
import { Header, Footer, CurrentVideo, VideoList } from './components';
import { getData } from './redux/thunks';
import { connect } from 'react-redux';
import { Wrapper } from './components/styledComponents';

const App = ({ getData, isWatching }) => {

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className='App'>
      <Header />
      
      <Wrapper>
        {isWatching && <CurrentVideo />}
        <VideoList />
      </Wrapper>

      <Footer />
    </div>
  );
}

const mstp = state => ({
  isWatching: state.videos.isWatching,
})

export default connect(mstp, { getData })(App);
