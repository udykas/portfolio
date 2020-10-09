import React from 'react';
import './App.css';

function App() {

  const handleMenu = () => {
    const menu = document.getElementsByClassName("menu");
    if(menu[0].classList.contains("active")){
      menu[0].classList.add("inactive")
      menu[0].classList.remove("active")
    } else {
      menu[0].classList.add("active")
      menu[0].classList.remove("inactive")
    }
    console.log(menu[0].classList)
  }

  return (
    <div className="App">
      <div className="menu-container">
        <div className="menu">
          <div className="menu-close-icon">
            <div onClick={handleMenu} style={{cursor: "pointer", padding: "10px"}}>
              <i class="fas fa-times fa-lg"></i>
            </div>
          </div>
          <ul className="menu-item-container">
            <li className="menu-item">HOME</li>
            <li className="menu-item">ABOUT</li>
            <li className="menu-item">TECH STACK</li>
            <li className="menu-item">PROJECTS</li>
            <li className="menu-item">ARTICLES</li>
            <li className="menu-item">CONTACT</li>
          </ul>
        </div>
      </div>
      <header className="header menu-icon">
        <div className="menu-icon-container" onClick={handleMenu}>
          <span>MENU</span>
          <i class="fas fa-bars fa-s"></i>
        </div>
      </header>
      <div className="App-header">
        <div className="landing-page-img"></div>
        <div className="landing-page-text">
          <hr className="line" style={{color: 'white', height: '1px', backgroundColor: 'white'}}/>
          <h2 className="name">ALEX DYKAS</h2>
          <hr className="line" style={{color: 'white', height: '1px', backgroundColor: 'white'}}/>
          <p className="occupation">FULLSTACK WEB DEVELOPER <br/> & <br/> SOFTWARE ENGINEER</p>
        </div>
      </div>
      {/* <div>
        <h2>About</h2>
      </div> */}
    </div>
  );
}

export default App;
