import React from 'react';
import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
