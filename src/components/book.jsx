import React from 'react';

const Book = () => {
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <div className="u-margin-bottom-medium">
                            <h2 className="heading-secondary">Book your trip</h2>
                        </div>
                        <form action="/" className="form">
                            <div className="form__group">
                                <input 
                                    type="text" 
                                    className="form__input" 
                                    placeholder="Full Name" 
                                    id="name"
                                    autoComplete="off"
                                    required/>
                                <label 
                                    htmlFor="name" 
                                    className="form__label">Full name</label>
                            </div>
                            <div className="form__group">
                                <input 
                                    type="email" 
                                    className="form__input" 
                                    placeholder="email"
                                    id="email"
                                    autoComplete="off"
                                    required />
                                <label 
                                    htmlFor="email" 
                                    className="form__label">Email address</label>
                            </div>
                            <div className="form__group u-margin-bottom-medium">
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="small" name="size"/>
                                    <label htmlFor="small" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Small tour group
                                    </label>
                                </div>
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="large" name="size"/>
                                    <label htmlFor="large" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Large tour group
                                    </label>
                                </div>
                            </div>

                            <div className="form__group">
                                <button className="btn btn--blue">Next Steps &rarr;</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book;

