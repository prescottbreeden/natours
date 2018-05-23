import React from 'react';
import photo1 from '../img/ivo-paul-van-vliet-heli1.jpg';
import photo2 from "../img/johannes-waibel-view3.jpg";
import photo3 from "../img/hendrik-morkel-view1.jpg";

const About = () => {
    return (
        <section className="section-about">    
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">Skiing and snowboarding for rich people</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum, aspernatur sint dolores voluptas eius laborum ipsa et exercitationem maiores quae!
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum, aspernatur sint dolores voluptas eius laborum ipsa et exercitationem maiores quae!
                    </p>
                    <a href="/" className="btn-text">Learn More &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={photo1} alt="helicopter skiing1" className="composition__photo composition__photo--p1" />
                        <img src={photo2} alt="helicopter skiing2" className="composition__photo composition__photo--p2" />
                        <img src={photo3} alt="helicopter skiing3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>   
    )
}

export default About;