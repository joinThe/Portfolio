import React from 'react';
import LinkButton from './Link';


function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="list">
                <li><LinkButton name="My works" url="/works"/></li>
                <li><LinkButton name="Contact me" url="/contact"/></li>
                <li><LinkButton name="My CV" url="/cv"/></li>
            </ul>
        </nav>
    );
}

export default NavBar;