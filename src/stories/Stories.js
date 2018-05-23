import React from 'react';
import bio1 from "../img/nat-8.jpg";
import bio2 from "../img/nat-9.jpg";

const Stories = () => {
    return (
        <section class="section-stories">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Heaven is a chopper ride away
                </h2>
            </div>

            <div class="row">
                <div class="story">
                    <figure class="story__shape">
                        <img src={bio1} alt="person loving life" class="story__img" />
                        <figcaption class="story__caption">Mona Lottz</figcaption>
                    </figure>
                    <div class="story__text">
                        <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quasi porro ullam illum dolores voluptates deserunt autem eligendi natus alias officia, ipsam, atque consectetur incidunt? Explicabo dolorem optio iste assumenda?
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="story">
                    <figure class="story__shape">
                        <img src={bio2} alt="person loving life" class="story__img" />
                        <figcaption class="story__caption">Moe Lester</figcaption>
                    </figure>
                    <div class="story__text">
                        <h3 class="heading-tertiary u-margin-bottom-small">Powder changed my life</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quasi porro ullam illum dolores voluptates deserunt autem eligendi natus alias officia, ipsam, atque consectetur incidunt? Explicabo dolorem optio iste assumenda?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stories;