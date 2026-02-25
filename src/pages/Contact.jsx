import React from 'react';

const Contact = ({ navigateTo }) => {
    return (
        <>
            {/* Contact Page Banner */}
            <section className="page-header-banner">
                <div className="container">
                    <h1>CONTACT</h1>
                    <div className="breadcrumbs">
                        <a href="#" className="home-link" onClick={(e) => navigateTo(e, 'home')}>HOME</a>
                        <span className="separator">-</span>
                        <span className="current-page">CONTACT</span>
                    </div>
                </div>
            </section>

            {/* Contact Main Section */}
            <section className="contact-page-section">
                <div className="container">
                    <div className="contact-grid-main">
                        <div className="contact-form-wrap">
                            <h2>WRITE US A MESSAGE <span>.</span></h2>
                            <div className="form-row-2">
                                <input type="text" className="contact-input" placeholder="Name" />
                                <input type="email" className="contact-input" placeholder="Email" />
                            </div>
                            <div className="form-row-2">
                                <input type="text" className="contact-input" placeholder="Phone" />
                                <input type="text" className="contact-input" placeholder="Subject" />
                            </div>
                            <textarea className="contact-textarea" placeholder="Write Message"></textarea>
                            <button className="btn-send-message">SEND MESSAGE</button>
                        </div>

                        <div className="map-wrap">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.289196395349!2d78.38888067493602!3d17.44583168341656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be77ad43ef!2sAyyappa%20Society%20Main%20Rd%2C%20Sri%20Sai%20Nagar%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1740145230325!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
