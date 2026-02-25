import React from 'react';
import flyhiiLogo from '../Screenshot (968).png';
import makLogo from '../Screenshot (970).png';

const ServiceDetail = ({ selectedService, servicesData, navigateTo }) => {
    if (!selectedService || !servicesData[selectedService]) return null;

    const data = servicesData[selectedService];

    return (
        <>
            {/* Service Banner */}
            <section className="event-banner">
                <div className="container">
                    <h1>{data.title}</h1>
                    <div className="event-breadcrumb">
                        HOME - {data.category} - <span>{data.title}</span>
                    </div>
                </div>
            </section>

            {/* Service Content Section */}
            <section className="mission-text-section">
                <div className="container">
                    <div className="mission-card">
                        <h2>{data.desc}</h2>
                        <p style={{ marginTop: '20px' }}>{data.longDesc}</p>
                        <p>ILITE GROUP INTERNATIONAL ensures that every digital solution we deliver is at the forefront of technological innovation and aesthetic excellence. We partner with our clients to transform their vision into a sophisticated digital reality.</p>
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

            {/* Custom Pre-Footer for Service Page */}
            <section className="pre-footer-green">
                <div className="container">
                    <h2>WE'RE READY TO BRING BIGGER <br /> & STRONGER PROJECTS</h2>
                    <a href="#contact" className="contact-btn-dark" onClick={(e) => navigateTo(e, 'contact')}>CONTACT WITH US</a>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;
