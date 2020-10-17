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
  )
}

export default Menu;