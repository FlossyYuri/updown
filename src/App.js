import React from 'react';
import './App.css';
import Header from './components/base/Header';
import PlayBar from './components/template/PlayBar';
import Main from './components/base/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <PlayBar />
    </div>
  );
}

export default App;
