import React from 'react';
import image1 from '../static/img/cliff_drop.jpg';
import image2 from '../static/img/big_pow.jpg';

const Popup = () => {
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={image1} alt="cliff drop" className="popup__img" />
                    <img src={image2} alt="hippopo" className="popup__img" />
                </div>
                <div className="popup__right">
                <a href="#section-packages" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heding-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="popup__text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur error nobis possimus fugit atque repellat quidem sunt non ex ipsa, eius incidunt nihil aut voluptas in doloribus commodi nesciunt voluptates.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur error nobis possimus fugit atque repellat quidem sunt non ex ipsa, eius incidunt nihil aut voluptas in doloribus commodi nesciunt voluptates.
                    </p>
                    <a href="#section-book" className="btn btn--blue">Book now</a>
                </div>
            </div>
        </div>
    )
}

export default Popup;