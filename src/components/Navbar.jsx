import React from 'react';
import logo from '../image.png';

const Navbar = ({ view, navigateTo, navigateToService, menuOpen, setMenuOpen }) => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo-wrapper" style={{ cursor: 'pointer' }} onClick={(e) => navigateTo(e, 'home')}>
                        <img src={logo} alt="ILITE Logo" className="logo-img" style={{ width: 'auto', height: '90px' }} />
                        <div className="logo-text">ILITE <span>INTERNATIONAL GROUP</span></div>
                    </div>

                    <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span>MENU</span>
                        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#home" className={view === 'home' ? 'active' : ''} onClick={(e) => navigateTo(e, 'home')}>Home</a></li>
                        <li className="has-mega">
                            <a href="#services">Services <i className="fas fa-chevron-down" style={{ fontSize: '12px' }}></i></a>
                            <div className="mega-menu">
                                <div className="mega-col">
                                    <h5>Web Design / Development</h5>
                                    <ul>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'corporate-web-design')}>Corporate Web Design</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'ecommerce-websites')}>E-commerce Websites</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'customized-websites')}>Customized / Personalized Websites</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'landing-page-design')}>Landing Page Design</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'responsive-web-design')}>Responsive Web Design</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'wire-framing')}>Wire Framing</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'website-re-design')}>Website Re-Design</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'digital-experience')}>Digital Experience Development</a></li>
                                    </ul>
                                </div>
                                <div className="mega-col">
                                    <h5>WEB APPLICATIONS</h5>
                                    <ul>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'hrms')}>HRMS</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'editorial-tracker')}>Editorial Tracker</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'cms')}>Conference Management System (CMS)</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'telemedicine')}>Telemedicine</a></li>
                                    </ul>
                                </div>
                                <div className="mega-col">
                                    <h5>UI/UX DESIGNING</h5>
                                    <ul>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'logo-design')}>Logo Design Brochures</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'info-graphics')}>Info Graphics</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'web-banners')}>Web Banners</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'business-cards')}>Business Cards</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'ebook')}>E-book</a></li>
                                    </ul>
                                </div>
                                <div className="mega-col">
                                    <h5>MOBILE APPS</h5>
                                    <ul>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'android-apps')}>Android</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'ios-apps')}>iOS</a></li>
                                    </ul>
                                </div>
                                <div className="mega-col">
                                    <h5>WEB HOSTING</h5>
                                    <ul>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'virtual-hosting')}>Virtual Hosting</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'shared-hosting')}>Shared Hosting</a></li>
                                        <li><a href="#" onClick={(e) => navigateToService(e, 'content-writing')}>Content Writing</a></li>
                                    </ul>
                                </div>
                                <div className="mega-col">
                                    <h5>EVENT MANAGEMENT SYSTEM</h5>
                                    <ul>
                                        <li><a href="#event-management" onClick={(e) => navigateTo(e, 'event-management')}>Conferences / Events</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="#clients" className={view === 'clients' ? 'active' : ''} onClick={(e) => navigateTo(e, 'clients')}>Clients</a></li>
                        <li><a href="#contact" className={view === 'contact' ? 'active' : ''} onClick={(e) => navigateTo(e, 'contact')}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
