import React from 'react';

const Packages = () => {
    return (
        <section className="section-packages">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Most popular packages
            </h2>
        </div>

        <div className="row">
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front card__side--front-1">
                        <div className="card__picture card__picture--1">
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">
                                The Cliff Dropper
                            </span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>3 days</li>
                                <li>6 hours flight time</li>
                                <li>2 guides</li>
                                <li>Food and lodging</li>
                                <li>Difficulty: Easy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$4,799</p>
                            </div>
                            <a href="/" className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front card__side--front-2">
                        <div className="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <div className="card__heading">
                            <span className="card__heading-span card__heading-span--2">
                                Powder Hunter
                            </span>
                        </div>
                        <div className="card__details">
                            <ul>
                                <li>5 days</li>
                                <li>12.5 hours flight time</li>
                                <li>2 guides</li>
                                <li>Food and lodging</li>
                                <li>Difficulty: Intermediate</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$6,799</p>
                            </div>
                            <a href="/" className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front card__side--front-3">
                        <div className="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <div className="card__heading">
                            <span className="card__heading-span card__heading-span--3">
                                Sultan of Powder
                            </span>
                        </div>
                        <div className="card__details">
                            <ul>
                                <li>7 days</li>
                                <li>21 hours flight time</li>
                                <li>2 guides</li>
                                <li>Food and lodging</li>
                                <li>Difficulty: Powder God</li>
                            </ul>
                        </div>                             
                    </div>
                    <div className="card__side card__side--back card__side--back-3">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$9,799</p>
                            </div>
                            <a href="/" className="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>                

        <div className="u-center-text u-margin-top-huge">
            <a href="/" className="btn btn--blue">Discover all packages</a>
        </div>
    </section>
    )
}

export default Packages;