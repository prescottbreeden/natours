import React from 'react';
import bio1 from "../static/img/nat-8.jpg";
import bio2 from "../static/img/nat-9.jpg";
import video from '../static/img/Mt_Baker.mp4';
import videoW from '../static/img/Mt_Baker.mp4';

const Stories = () => {
    return (
        <section className="section-stories">
        
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    <source src={videoW} type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Heaven is a chopper ride away
                </h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={bio1} alt="person loving life" className="story__img" />
                        <figcaption className="story__caption">Mona Lott</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quasi porro ullam illum dolores voluptates deserunt autem eligendi natus alias officia, ipsam, atque consectetur incidunt? Explicabo dolorem optio iste assumenda?
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={bio2} alt="person loving life" className="story__img" />
                        <figcaption className="story__caption">Moe Lester</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Powder changed my life</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quasi porro ullam illum dolores voluptates deserunt autem eligendi natus alias officia, ipsam, atque consectetur incidunt? Explicabo dolorem optio iste assumenda?
                        </p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="/stories" className="btn-text">Read all stories &rarr;</a>
            </div>
        </section>
    )
}

export default Stories;