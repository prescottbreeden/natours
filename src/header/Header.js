import React from 'react';
import logo from "../img/snowflake-white.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Powder</span>
                    <span className="heading-primary--sub">reimagine life</span>
                </h1>
                <a href="/" className="btn btn--white btn--animated">Discover our Heli-skiing</a>
            </div>
        </header>
    )
}

export default Header;