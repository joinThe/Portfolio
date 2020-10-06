import React from 'react';
import NavBar from './NavBar'
import './Header.css'

function Header(){
    return(
    <header className="header">
        <div className="container">  
         <NavBar/>
        </div>
      </header>
      );
}

export default Header;