import React from 'react';

const Packages = () => {
    return (
        <section class="section-packages">
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                Most popular packages
            </h2>
        </div>
        <div class="row">
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front card__side--front-1">
                        <div class="card__picture card__picture--1">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--1">
                                The Cliff Dropper
                            </span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>3 days</li>
                                <li>6 hours flight time</li>
                                <li>2 guides</li>
                                <li>Food and lodging</li>
                                <li>Difficulty: Easy</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">$4,799</p>
                            </div>
                            <a href="#" class="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front card__side--front-2">
                        <div class="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <div class="card__heading">
                            <span class="card__heading-span card__heading-span--2">
                                Powder Hunter
                            </span>
                        </div>
                        <div class="card__details">
                            <ul>
                                <li>5 days</li>
                                <li>12.5 hours flight time</li>
                                <li>2 guides</li>
                                <li>Food and lodging</li>
                                <li>Difficulty: Intermediate</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="card__side card__side--back card__side--back-2">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">$6,799</p>
                            </div>
                            <a href="#" class="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front card__side--front-3">
                        <div class="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <div class="card__heading">
                            <span class="card__heading-span card__heading-span--3">
                                Sultan of Powder
                            </span>
                        </div>
                        <div class="card__details">
                            <ul>
                                <li>7 days</li>
                                <li>21 hours flight time</li>
                                <li>2 guides</li>
                                <li>Food and lodging</li>
                                <li>Difficulty: Powder God</li>
                            </ul>
                        </div>                             
                    </div>
                    <div class="card__side card__side--back card__side--back-3">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">$9,799</p>
                            </div>
                            <a href="#" class="btn btn--white">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>                

        <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn btn--blue">Discover all packages</a>
        </div>
    </section>
    )
}

export default Packages;