import React from 'react';
import LinkButton from './Link';


function NavBar(){
    return(
      <nav className="nav-bar">
      <ul className="list">
          <li> <LinkButton name="My works"/></li>
         <li> <LinkButton name="Contact me"/></li>
         <li> <LinkButton name="My CV"/></li>
         </ul>
     </nav>
      );
}

export default NavBar;