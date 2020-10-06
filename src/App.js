import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="landing-page-img"></div>
        <div className="landing-page-text">
          <hr className="line" style={{color: 'white', height: '1px', backgroundColor: 'white'}}/>
          <h2 className="name">ALEX DYKAS</h2>
          <hr className="line" style={{color: 'white', height: '1px', backgroundColor: 'white'}}/>
          <p className="occupation">FULLSTACK WEB DEVELOPER <br/> & <br/> SOFTWARE ENGINEER</p>
        </div>
      </header>
    </div>
  );
}

export default App;
