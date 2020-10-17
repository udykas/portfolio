import React from 'react';
import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
