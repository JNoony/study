import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const handleClick = (e) =>{
    e.preventDefault();
    let target = e.currentTarget;
    let parent = target.parentNode;

    parent.classList.toggle("show");
    
}

const Header = ()=>{
    
        return(
            <header className="head">
                <h1 className="head-logo">mobintouch</h1>
                <nav className="head-gnb">
                    <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to={ {pathname: '/service'} }>Service</Link></li>
                        <li><Link to="/recruit">Recruit</Link></li>
                        <li><Link to="/job">Job</Link></li>
                    </ul>
                </nav>
                <span className="head-btn" onClick={handleClick}>m</span>
            </header>
        )

}

export default Header;