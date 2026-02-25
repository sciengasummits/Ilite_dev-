import React from 'react';
import logo from '../image.png';

const Footer = ({ view, navigateTo }) => {
    return (
        <>
            {/* Pre-Footer CTA */}
            {view !== 'event-management' && (
                <section className="pre-footer-cta">
                    <div className="container cta-flex">
                        <h2>READY TO START YOUR <br /> DIGITAL LEGACY?</h2>
                        <a href="#contact" className="btn-contact-slanted" onClick={(e) => navigateTo(e, 'contact')}>INITIATE PARTNERSHIP</a>
                    </div>
                </section>
            )}

            {/* Premium Multi-Column Footer */}
            <footer>
                <div className="container">
                    <div className="footer-main-grid">
                        <div className="footer-col">
                            <div className="footer-logo-wrap" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <img src={logo} alt="ILITE Logo" className="logo-img" style={{ width: 'auto', height: '80px' }} />
                                <div className="logo-text">ILITE <span>GROUP INTERNATIONAL</span></div>
                            </div>
                            <p>"Architecting the Global Lore of Technology."</p>
                            <div className="footer-socials">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h5 style={{ color: '#fff', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Insight</h5>
                            <ul>
                                <li><a href="#home" onClick={(e) => navigateTo(e, 'home')}>The Base</a></li>
                                <li><a href="#services">Our Craft</a></li>
                                <li><a href="#clients" onClick={(e) => navigateTo(e, 'clients')}>Clients</a></li>
                                <li><a href="#contact" onClick={(e) => navigateTo(e, 'contact')}>Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h5 style={{ color: '#fff', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Governance</h5>
                            <ul>
                                <li><a href="#">Privacy Framework</a></li>
                                <li><a href="#">Operational Terms</a></li>
                                <li><a href="#">Support Hub</a></li>
                            </ul>
                        </div>

                        <div className="footer-col contact-info-list" style={{ marginTop: '50px' }}>
                            <p>ILITE HQ: Megha Hills, Madhapur, <br />Hyderabad, India 500081</p>
                            <p>Inquiries: +91 8008188585</p>
                            <p>Intelligence: connect@ilitegroup.com</p>
                        </div>

                        <div className="footer-col footer-form" style={{ marginTop: '50px' }}>
                            <h5 style={{ color: '#fff', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Intel Alert</h5>
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Business Email" />
                            <button className="btn-subscribe">
                                <i className="fas fa-paper-plane"></i> Register Interest
                            </button>
                            <p className="small-text">Receive exclusive strategic digital insights. Zero noise architecture.</p>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© copyright 2025 ILITE INTERNATIONAL GROUP PVT LTD | A Royal Alliance of Innovation.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
