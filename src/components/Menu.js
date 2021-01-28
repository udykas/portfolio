import React from 'react';

function Menu() {

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

  return(
    <div className="menu-container">
      <div className="menu">
        <div className="menu-close-icon">
          <div onClick={handleMenu} style={{cursor: "pointer", padding: "10px"}}>
            <i className="fas fa-times fa-lg"></i>
          </div>
        </div>
        <ul className="menu-item-container">
          <li className="menu-item"><a href="#home">HOME</a></li>
          <li className="menu-item"><a href="#about">ABOUT</a></li>
          <li className="menu-item"><a href="#tech">TECH STACK</a></li>
          <li className="menu-item"><a href="#projects">PROJECTS</a></li>
          <li className="menu-item"><a href="#articls">ARTICLES</a></li>
          <li className="menu-item"><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;