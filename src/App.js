import React, { useEffect } from 'react';
import './App.css';
import { Header, Footer, CurrentVideo, VideoList, VideoItem } from './components';
import { getData } from './redux/videosReducer';
import { connect } from 'react-redux';

const App = ({ getData }) => {
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className='App'>
      <Header />
      <Footer />
      <CurrentVideo />
      <VideoList />
      <VideoItem />
    </div>
  );
}

export default connect(null, { getData })(App);
