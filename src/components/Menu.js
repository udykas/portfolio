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
          <li className="menu-item">
            <a href="#home" onClick={handleMenu}>
              HOME
            </a>
          </li>
          <li className="menu-item">
            <a href="#about" onClick={handleMenu}>
              ABOUT
            </a>
          </li>
          <li className="menu-item">
            <a href="#tech" onClick={handleMenu}>
              TECH STACK
            </a>
          </li>
          <li className="menu-item">
            <a href="#projects" onClick={handleMenu}>
              PROJECTS
            </a>
          </li>
          {/* <li className="menu-item">
            <a href="#articls" onClick={handleMenu}>
              ARTICLES
            </a>
          </li> */}
          <li className="menu-item">
            <a href="#contact" onClick={handleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;