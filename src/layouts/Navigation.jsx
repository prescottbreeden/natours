import React from 'react';
import logo from "../static/img/snowflake-white.png";

const Navigation = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="/" className="navigation__link">About Powder</a>
                        <img src={logo} alt="Logo" className="navigation__snowflake navigation__snowflake-1" /> 
                    </li>
                    <li className="navigation__item">
                        <a href="/" className="navigation__link">Popular packages</a>
                        <img src={logo} alt="Logo" className="navigation__snowflake navigation__snowflake-2" /> 
                    </li>
                    <li className="navigation__item">
                        <a href="#popup" className="navigation__link">Book now</a>
                        <img src={logo} alt="Logo" className="navigation__snowflake navigation__snowflake-3" /> 
                    </li>
                    <li className="navigation__item">
                        <a href="/" className="navigation__link">Stories</a>
                        <img src={logo} alt="Logo" className="navigation__snowflake navigation__snowflake-4" /> 
                    </li>
                    <li className="navigation__item">
                        <a href="/" className="navigation__link">Contact</a>
                        <img src={logo} alt="Logo" className="navigation__snowflake navigation__snowflake-5" /> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;