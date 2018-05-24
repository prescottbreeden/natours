import React from 'react';
import full_logo from "../static/img/favicon-blue.png";

const Footer = () => {
    return (
        <section>
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src={full_logo} alt="Full logo" className="footer__logo"/>
                    <h3 className="footer__logo-text">Powder, Inc.</h3>
                </div>    
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="/" className="footer__link">Company</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Contact</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Careers</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Privacy</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            This website was built by <a href="/" className="footer__link">Prescott Breeden</a>.  Check out my <a href="/" className="footer__link">other projects</a>. Copyright &copy; by Prescott Breeden. Layout designed by Jonas Schmedtman.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer;