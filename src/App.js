import React from 'react';
import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import About from './components/About/About';
import TechStack from './components/Tech Stack/TechStack';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <LandingPage />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
