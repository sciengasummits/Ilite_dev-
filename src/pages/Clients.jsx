import flyhiiLogo from '../Screenshot (968).png';
import makLogo from '../Screenshot (970).png';
import sciengaLogo from '../Screenshot (993).png';

const Clients = ({ navigateTo }) => {
    return (
        <>
            {/* Clients Page Banner */}
            <section className="page-header-banner">
                <div className="container">
                    <h1>CLIENTS</h1>
                    <div className="breadcrumbs">
                        <a href="#" className="home-link" onClick={(e) => navigateTo(e, 'home')}>HOME</a>
                        <span className="separator">-</span>
                        <span className="current-page">CLIENTS</span>
                    </div>
                </div>
            </section>

            {/* Detailed Clients Grid */}
            <section className="detailed-clients-section">
                <div className="container">
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
                </div>
            </section>
        </>
    );
};

export default Clients;
