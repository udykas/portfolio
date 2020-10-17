import React from 'react';

function Header() {
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
    <header className="header menu-icon">
      <div className="menu-icon-container" onClick={handleMenu}>
        <span>MENU</span>
        <i class="fas fa-bars fa-s"></i>
      </div>
    </header>
  )
}

export default Header;