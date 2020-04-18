import React from 'react';
import './App.css';
import { Header, Footer, CurrentVideo, VideoList, VideoItem } from './components';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Footer />
        <CurrentVideo />
        <VideoList />
        <VideoItem />
      </div>
    </div>
  );
}

export default App;
