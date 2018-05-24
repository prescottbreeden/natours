import React from 'react';

const Features = () => {
    return (
        <section className="section-features">   
            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="fas fa-globe feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                        <p className="feature-box__text">
                            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                    <i className="fas fa-leaf feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                        <p className="feature-box__text">
                            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon fas fa-map"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                        <p className="feature-box__text">
                            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon far fa-heart"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">We love your money</h3>
                        <p className="feature-box__text">
                            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;