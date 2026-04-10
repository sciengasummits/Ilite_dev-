import React from 'react';
import flyhiiLogo from '../Screenshot (968).png';
import makLogo from '../Screenshot (970).png';
import sciengaLogo from '../Screenshot (993).png';

const Home = ({ navigateTo, clientSlide, setClientSlide, activeTab, setActiveTab }) => {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="hero">
                {/* Vertical Side Info */}
                <div className="side-info">
                    <span>24/7 SUPPORT</span>
                    <span>INNOVATION CENTER</span>
                </div>

                {/* Curves Overlay */}
                <div className="curves-container">
                    <svg className="curve-svg" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100 200 C300 150 400 600 800 500 S1200 100 1600 300" strokeWidth="4" />
                        <path d="M-150 300 C250 250 350 700 750 600 S1150 200 1550 400" strokeWidth="2" />
                    </svg>
                </div>

                <div className="container hero-content">
                    <h1 className="hero-logo-text">
                        CO-LINKED
                        <span className="hero-subtitle">GROUP PRIVATE LIMITED</span>
                    </h1>
                    <div className="hero-tagline">A ROYAL ALLIANCE OF INNOVATION</div>
                    <a href="#about" className="btn-discover">EXPLORE OUR LORE</a>
                </div>
            </section>

            {/* Solutions Section */}
            <section id="services" className="solutions-section">
                <div className="container">
                    <div className="solutions-header">
                        <h2>WE ARCHITECT THE FUTURE <br /> <span>STANDARDS.</span></h2>
                        <p>BRINGING REVOLUTIONARY DIGITAL PARADIGMS TO MODERN INDUSTRY</p>
                    </div>

                    <div className="solutions-grid">
                        <div className="solution-card">
                            <span className="card-number">01</span>
                            <div className="card-icon"><i className="fas fa-code"></i></div>
                            <h4>FULL-STACK ECOSYSTEMS</h4>
                        </div>
                        <div className="solution-card">
                            <span className="card-number">02</span>
                            <div className="card-icon"><i className="fas fa-rocket"></i></div>
                            <h4>ENTERPRISE CLOUD DYNAMICS</h4>
                        </div>
                        <div className="solution-card">
                            <span className="card-number">03</span>
                            <div className="card-icon"><i className="fas fa-bezier-curve"></i></div>
                            <h4>COGNITIVE UI/UX DESIGN</h4>
                        </div>
                        <div className="solution-card">
                            <span className="card-number">04</span>
                            <div className="card-icon"><i className="fas fa-fingerprint"></i></div>
                            <h4>SECURE MOBILE SOLUTIONS</h4>
                        </div>
                        <div className="solution-card">
                            <span className="card-number">05</span>
                            <div className="card-icon"><i className="fas fa-feather-alt"></i></div>
                            <h4>NARRATIVE STRATEGY</h4>
                        </div>
                        <div className="solution-card">
                            <span className="card-number">06</span>
                            <div className="card-icon"><i className="fas fa-network-wired"></i></div>
                            <h4>INTELLIGENT INFRASTRUCTURE</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern About Section */}
            <section id="about" className="about-modern-section">
                <div className="container">
                    <div className="about-modern-grid">
                        <div className="about-modern-images">
                            <div className="accent-bar-vertical"></div>
                            <div className="main-img-wrap">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Innovation Hub" />
                            </div>
                            <div className="overlap-img-wrap">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data Science" />
                            </div>
                        </div>

                        <div className="about-modern-content">
                            <h2>LEADERS IN THE <br /> FOURTH INDUSTRIAL <br /> REVOLUTION .</h2>
                            <h3>TRANSFORMING COMPLEX BUSINESS CHALLENGES INTO SEAMLESS DIGITAL EXPERIENCES.</h3>
                            <p>
                                <b>CO-LINKED GROUP PRIVATE LIMITED</b> transcends traditional boundaries. We don't just provide services; we craft legacies. Our methodology integrates high-level technical precision with artistic intuition to ensure every venture we power sets a new global benchmark.
                            </p>

                            <div className="checklist-since-wrap">
                                <ul className="checklist">
                                    <li><i className="fas fa-bolt"></i> Rapid Prototyping.</li>
                                    <li><i className="fas fa-expand-arrows-alt"></i> Scalable Architecture.</li>
                                    <li><i className="fas fa-shield-alt"></i> Certified Security.</li>
                                </ul>
                                <div className="vertical-divider"></div>
                                <div className="since-badge">
                                    <span>BORN</span>
                                    <b>2018</b>
                                </div>
                            </div>

                            <a href="#contact" className="btn-discover" onClick={(e) => navigateTo(e, 'contact')}>MEET THE ARCHITECTS</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Section */}
            <section className="mission-vision-section">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-vision-tabs">
                            <p className="tab-intro">To view tab/page about more details.</p>
                            <div className="tabs-header">
                                <button
                                    className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('mission')}
                                >
                                    OUR MISSION
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('vision')}
                                >
                                    OUR VISION
                                </button>
                            </div>
                            <div className="tab-content">
                                {activeTab === 'mission' ? (
                                    <p className="fade-in">Develop high quality and affordable web solutions that enable clients to establish presence online, increase profitability, and continually improve productivity. Create Always, Think All Ways.</p>
                                ) : (
                                    <p className="fade-in">To be the leading global provider of innovative digital solutions, empowering businesses to reach their full potential through cutting-edge technology and strategic excellence. Pioneering paths in the infinite tech landscape.</p>
                                )}
                            </div>
                        </div>

                        <div className="mission-vision-info">
                            <p className="info-headline">
                                Our services and products will be "top notch" in terms of money spent and value received. We will efficiently perform, continually improve, and respond vigorously to change. Each individual is responsible for quality.
                            </p>
                            <div className="info-visual-wrap">
                                <div className="circle-img-wrap">
                                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Team Synergy" />
                                </div>
                                <ul className="value-list">
                                    <li><i className="fas fa-chevron-right"></i> Customer Satisfaction.</li>
                                    <li><i className="fas fa-chevron-right"></i> People.</li>
                                    <li><i className="fas fa-chevron-right"></i> Integrity.</li>
                                    <li><i className="fas fa-chevron-right"></i> Quality.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="quote-section">
                <div className="container">
                    <div className="quote-icon-wrap">
                        <div className="quote-circle" style={{ cursor: 'pointer' }} onClick={(e) => navigateTo(e, 'home')}></div>
                    </div>
                    <h2 className="quote-text">
                        INNOVATION DISTINGUISHES <br />
                        BETWEEN A LEADER AND <br />
                        <span>A FOLLOWER.</span>
                    </h2>
                </div>
            </section>

            {/* Home Clients Preview */}
            <section className="home-clients-section">
                <div className="container">
                    <div className="solutions-header">
                        <h2>OUR TRUSTED <br /> <span>CLIENTS.</span></h2>
                        <p>POWERING LEADERS ACROSS GLOBAL INDUSTRIES</p>
                    </div>
                    <div className="detailed-clients-grid">
                        <div className="client-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://makmeetings.org', '_blank')}>
                            <div className="client-logo-wrap">
                                <img src={makLogo} alt="Mak Meetings" />
                            </div>
                            <div className="client-info">
                                <h4>Mak Meetings</h4>
                                <span className="client-type">makmeetings.org</span>
                            </div>
                        </div>
                        <div className="client-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://flyhii.in', '_blank')}>
                            <div className="client-logo-wrap">
                                <img src={flyhiiLogo} alt="Flyhii" />
                            </div>
                            <div className="client-info">
                                <h4>Flyhii</h4>
                                <span className="client-type">flyhii.in</span>
                            </div>
                        </div>
                        <div className="client-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://SciengaSummits.com', '_blank')}>
                            <div className="client-logo-wrap">
                                <img src={sciengaLogo} alt="Scienga Summits" />
                            </div>
                            <div className="client-info">
                                <h4>Scienga Summits</h4>
                                <span className="client-type">SciengaSummits.com</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <a href="#clients" className="btn-discover" onClick={(e) => navigateTo(e, 'clients')}>VIEW ALL PARTNERS</a>
                    </div>
                </div>
            </section>

            {/* Discuss Section */}
            <section className="discuss-section">
                <div className="container">
                    <h2>LET'S PIONEER YOUR NEXT <br /> BREAKTHROUGH .</h2>
                    <div className="discuss-cta-wrap" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80")' }}>
                        <div className="discuss-overlay-circle">
                            <div className="small-dark-circle" style={{ cursor: 'pointer' }} onClick={(e) => navigateTo(e, 'home')}></div>
                            <p>Our architects are ready to blueprint your global digital expansion</p>
                            <a href="#contact" className="contact-link-wrap" onClick={(e) => navigateTo(e, 'contact')}>INITIATE FLOW</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
