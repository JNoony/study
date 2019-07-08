import React from 'react';
import { Link } from 'react-router-dom'

function Header () {
    return(
        <header className="head">
            <h1 className="head-logo">logo</h1>
            <nav className="head-nav">
                <div className="head-nav-gnb">
                    <Link to="./">main</Link>
                    <Link to="./page1">page1</Link>
                    <Link to="./page2">page2</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;