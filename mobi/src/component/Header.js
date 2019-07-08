import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
// import style from './Header.css';
// import classNames from "classnames/bind";
// const hd = classNames.bind(style);

const handleClick = (e) =>{
    e.preventDefault();
    let target = e.currentTarget;
    let parent = target.parentNode;
    parent.classList.toggle("show");
}

const linkClick = () => {
    let page = document.querySelector('.page');
    let gnb = document.querySelector('.head');
    if( page.style.marignLeft = '300px' ){
        gnb.classList.remove('show');
    }
}

const Header = ()=>{
        return(
            // <header className={hd("head")}>
            <header className="head">
                <h1 className="head-logo">mobintouch</h1>
                <nav className="head-gnb">
                    <ul>
                        <li><Link to="/" onClick={linkClick}>Main</Link></li>
                        <li><Link to={ {pathname: '/service'} } onClick={linkClick}>Service</Link></li>
                        <li><Link to="/recruit" onClick={linkClick}>Recruit</Link></li>
                        <li><Link to="/job" onClick={linkClick}>Job</Link></li>
                    </ul>
                </nav>
                <span className="head-btn" onClick={handleClick}>m</span>
                <span className="head-btn head-btn2"><Link to="/login" onClick={linkClick}>login</Link></span>
                <span className="head-btn head-btn2"><Link to="/login" onClick={linkClick}>회원가입</Link></span>
            </header>
        )

}

export default Header;