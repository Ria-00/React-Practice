import React from 'react'

function Header(){
    return(
        <header>
            <h1 style={{fontFamily:'sans-serif'}}><b>PACKWRAP</b></h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </header>
    );
}

export default Header;