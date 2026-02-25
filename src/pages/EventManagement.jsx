import React from 'react';
import flyhiiLogo from '../Screenshot (968).png';
import makLogo from '../Screenshot (970).png';

const EventManagement = ({ navigateTo }) => {
    return (
        <>
            {/* Event Banner */}
            <section className="event-banner">
                <div className="container">
                    <h1>EVENT MANAGEMENT SYSTEM</h1>
                    <div className="event-breadcrumb">
                        HOME - <span>EVENT MANAGEMENT SYSTEM</span>
                    </div>
                </div>
            </section>

            {/* Mission Text Section */}
            <section className="mission-text-section">
                <div className="container">
                    <div className="mission-card">
                        <p>Our mission is to promote the scientific sustainable growth and build scientific global reputation and brand. We do this by attracting international scientific researchers, businesses, talents and visitors, and conducting international conferences and marketing.</p>
                        <p>Our services are tailor-made to match to all scientific fields related needs conferences</p>
                        <p>We host a wide range of international conferences in the fields of life sciences, physics and engineering, social sciences, and health sciences. We work with the brightest minds in science and health to support scientists, students, and health and information professionals.</p>
                    </div>
                </div>
            </section>

            {/* Subsidiaries Section */}
            <section className="subsidiaries-section">
                <h2 className="subsidiaries-heading">Our Subsidiaries/Clients</h2>
                <div className="sub-logo-grid">
                    <div className="sub-logo-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://makmeetings.org', '_blank')}>
                        <img src={makLogo} alt="Mak Meetings" />
                        <h6>Mak Meetings</h6>
                        <a href="https://makmeetings.org" target="_blank" rel="noopener noreferrer" className="website-link">Website</a>
                    </div>
                    <div className="sub-logo-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://flyhii.in', '_blank')}>
                        <img src={flyhiiLogo} alt="Flyhii" />
                        <h6>Flyhii</h6>
                        <a href="https://flyhii.in" target="_blank" rel="noopener noreferrer" className="website-link">Website</a>
                    </div>
                    <div className="sub-logo-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://SciengaSummits.com', '_blank')}>
                        <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=300&q=80" alt="Scienga Summits" />
                        <h6>Scienga Summits</h6>
                        <a href="https://SciengaSummits.com" target="_blank" rel="noopener noreferrer" className="website-link">Website</a>
                    </div>
                </div>
            </section>

            {/* Custom Pre-Footer for Event Page */}
            <section className="pre-footer-green">
                <div className="container">
                    <h2>WE'RE READY TO BRING BIGGER <br /> & STRONGER PROJECTS</h2>
                    <a href="#contact" className="contact-btn-dark" onClick={(e) => navigateTo(e, 'contact')}>CONTACT WITH US</a>
                </div>
            </section>
        </>
    );
};

export default EventManagement;
