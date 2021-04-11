import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-3">
            <div className="container">
                <div className="section-header text-center">
                    <h6 style={{ color: '#1CC7C1' }}>CONTACT US </h6>
                    <h1 className="text-white"> Always Contact With Us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email *" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Subject *" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="8" ols="30" placeholder="Your message"></textarea>
                        </div>
                        <div class="form-group text-center">
                            <button type="button" className="btn btn-dark text-white" style={{ backgroundColor: '#1CC7C1', width: '100px' }}>Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;