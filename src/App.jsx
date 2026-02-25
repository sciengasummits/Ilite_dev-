import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import EventManagement from './pages/EventManagement';
import ServiceDetail from './pages/ServiceDetail';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [view, setView] = useState('home'); // 'home', 'clients', 'contact', 'event-management', 'service-detail'
    const [selectedService, setSelectedService] = useState(null);
    const [clientSlide, setClientSlide] = useState(1);
    const [activeTab, setActiveTab] = useState('mission'); // 'mission' or 'vision'

    const navigateTo = (e, target) => {
        if (e) e.preventDefault();
        setView(target);
        setMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const navigateToService = (e, serviceId) => {
        if (e) e.preventDefault();
        setSelectedService(serviceId);
        setView('service-detail');
        setMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const servicesData = {
        'corporate-web-design': { title: 'Corporate Web Design', category: 'WEB DESIGN / DEVELOPMENT', desc: 'Crafting high-impact digital experiences for global enterprises.', longDesc: 'We specialize in creating professional, high-performance websites that reflect the prestige and scale of corporate entities. Our designs prioritize security, scalability, and seamless user journeys.' },
        'ecommerce-websites': { title: 'E-commerce Websites', category: 'WEB DESIGN / DEVELOPMENT', desc: 'Scalable online stores engineered for maximum conversion.', longDesc: 'Our e-commerce solutions integrate advanced payment gateways, inventory management, and personalized shopping experiences to drive sales and customer loyalty.' },
        'customized-websites': { title: 'Customized / Personalized Websites', category: 'WEB DESIGN / DEVELOPMENT', desc: 'Bespoke digital solutions tailored to unique business needs.', longDesc: 'We build unique, custom-coded web environments that go beyond template constraints, offering specialized functionality specifically designed for your business model.' },
        'landing-page-design': { title: 'Landing Page Design', category: 'WEB DESIGN / DEVELOPMENT', desc: 'High-conversion entry points for targeted marketing campaigns.', longDesc: 'Every element of our landing pages is optimized for conversion. We combine psychological triggers with aesthetic precision to turn visitors into leads.' },
        'responsive-web-design': { title: 'Responsive Web Design', category: 'WEB DESIGN / DEVELOPMENT', desc: 'Fluid experiences across all devices and screen sizes.', longDesc: 'In a mobile-first world, we ensure your brand looks flawless everywhere. Our responsive frameworks adapt dynamically to provide the best possible experience on any device.' },
        'wire-framing': { title: 'Wire Framing', category: 'WEB DESIGN / DEVELOPMENT', desc: 'Architectural blueprints for intuitive user interfaces.', longDesc: 'Before we design, we map. Our wireframing process focuses on information architecture and user flow, ensuring the foundation of your project is solid and intuitive.' },
        'website-re-design': { title: 'Website Re-Design', category: 'WEB DESIGN / DEVELOPMENT', desc: 'Modernizing legacy platforms for the digital age.', longDesc: 'We breathe new life into existing platforms, improving performance, updating aesthetics, and enhancing functionality to meet modern web standards.' },
        'digital-experience': { title: 'Digital Experience Development', category: 'WEB DESIGN / DEVELOPMENT', desc: 'Immersive interactions that bridge the gap between brand and user.', longDesc: 'We develop rich, interactive environments that engage users on a deeper level, utilizing the latest web technologies to create memorable digital narratives.' },
        'hrms': { title: 'HRMS', category: 'WEB APPLICATIONS', desc: 'Comprehensive Human Resource Management Systems.', longDesc: 'Streamline your workforce management with our integrated HRMS solutions, covering everything from recruitment and payroll to performance tracking.' },
        'editorial-tracker': { title: 'Editorial Tracker', category: 'WEB APPLICATIONS', desc: 'Advanced workflow management for publishing and media.', longDesc: 'Manage your content lifecycle efficiently with real-time tracking, collaborative tools, and automated editorial workflows designed for high-volume publishing.' },
        'cms': { title: 'Conference Management System (CMS)', category: 'WEB APPLICATIONS', desc: 'End-to-end digital solutions for scientific conferences.', longDesc: 'Our CMS handles abstract submissions, peer reviews, registrations, and scheduling, providing a seamless experience for both organizers and attendees.' },
        'telemedicine': { title: 'Telemedicine', category: 'WEB APPLICATIONS', desc: 'Secure digital healthcare platforms for remote consultation.', longDesc: 'We build HIPAA-compliant telemedicine portals that connect doctors and patients securely, featuring video consultations, digital prescriptions, and health record management.' },
        'logo-design': { title: 'Logo Design Brochures', category: 'UI/UX DESIGNING', desc: 'Visual identities that define market leaders.', longDesc: 'Our UI/UX team crafts compelling visual identities and high-end marketing collateral that resonates with your target audience and strengthens brand recognition.' },
        'info-graphics': { title: 'Info Graphics', category: 'UI/UX DESIGNING', desc: 'Transforming complex data into visual stories.', longDesc: 'We visualize intricate information through stunning, easy-to-digest infographics that simplify complexity and enhance data communication.' },
        'web-banners': { title: 'Web Banners', category: 'UI/UX DESIGNING', desc: 'High-impact visuals for digital advertising.', longDesc: 'Our designers create eye-catching digital banners that drive engagement and clicks, optimized for various platforms and advertising networks.' },
        'business-cards': { title: 'Business Cards', category: 'UI/UX DESIGNING', desc: 'Premium print assets for professional networking.', longDesc: 'We design high-end business cards and stationery that leave a lasting impression, reflecting the quality and professionalism of your brand.' },
        'ebook': { title: 'E-book', category: 'UI/UX DESIGNING', desc: 'Professional digital publication design.', longDesc: 'From layout to typography, we create polished and professional E-books that are optimized for digital reading across all devices.' },
        'android-apps': { title: 'Android App Development', category: 'MOBILE APPS', desc: 'Native Android experiences reaching billions.', longDesc: 'We develop robust, performance-optimized Android applications that leverage the full potential of the platform to deliver exceptional user value.' },
        'ios-apps': { title: 'iOS App Development', category: 'MOBILE APPS', desc: 'Premium applications for the Apple ecosystem.', longDesc: 'Our iOS developers build sophisticated, high-performance applications that adhere to Apple\'s strict quality standards and provide seamless user experiences.' },
        'virtual-hosting': { title: 'Virtual Hosting', category: 'WEB HOSTING', desc: 'High-performance cloud infrastructure for web assets.', longDesc: 'Reliable, scalable virtual hosting solutions designed to ensure your website remains fast and accessible 24/7 with 99.9% uptime.' },
        'shared-hosting': { title: 'Shared Hosting', category: 'WEB HOSTING', desc: 'Cost-effective hosting for growing businesses.', longDesc: 'The perfect balance of performance and value, our shared hosting plans provide the essential resources for smaller websites and startups.' },
        'content-writing': { title: 'Content Writing', category: 'WEB HOSTING', desc: 'Strategic storytelling for the digital landscape.', longDesc: 'Our copywriters craft compelling, SEO-optimized content that tells your brand story, engages your audience, and drives meaningful interactions.' }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setClientSlide((prev) => (prev === 1 ? 2 : 1));
        }, 5000); // Transitions every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`app-wrapper ${menuOpen ? 'menu-is-open' : ''}`}>
            <Navbar
                view={view}
                navigateTo={navigateTo}
                navigateToService={navigateToService}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <main>
                {view === 'home' && (
                    <Home
                        navigateTo={navigateTo}
                        clientSlide={clientSlide}
                        setClientSlide={setClientSlide}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                )}

                {view === 'clients' && <Clients navigateTo={navigateTo} />}

                {view === 'contact' && <Contact navigateTo={navigateTo} />}

                {view === 'service-detail' && (
                    <ServiceDetail
                        selectedService={selectedService}
                        servicesData={servicesData}
                        navigateTo={navigateTo}
                    />
                )}

                {view === 'event-management' && <EventManagement navigateTo={navigateTo} />}
            </main>

            <Footer view={view} navigateTo={navigateTo} />
        </div>
    );
};

export default App;
