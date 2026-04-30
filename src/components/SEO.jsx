import { useEffect } from 'react';

/**
 * SEO Component – Co-Linked Group
 * Dynamically updates <title>, <meta description>, <meta keywords>,
 * and canonical <link> based on the active view / service.
 *
 * Usage: <SEO view={view} selectedService={selectedService} />
 */

const BASE_URL = 'https://www.colinkedgroup.com';

const PAGE_META = {
    home: {
        title: 'Co-Linked Group | Web Design, App Development & Digital Solutions – Hyderabad',
        description:
            'Co-Linked Group Private Limited – A Royal Alliance of Innovation. Premium web design, e-commerce, mobile app development, UI/UX, HRMS & enterprise digital solutions from Hyderabad, India.',
        keywords:
            'web design company Hyderabad, web development India, e-commerce website, mobile app development, UI UX design, digital solutions, Co-Linked Group',
        canonical: `${BASE_URL}/`,
    },
    clients: {
        title: 'Our Clients | Co-Linked Group \u2013 Trusted Global Partners',
        description:
            'Explore Co-Linked Group\'s trusted clients including Mak Meetings, Flyhii, and Scienga Summits. Powering leaders across global industries with innovative digital solutions.',
        keywords:
            'Co-Linked Group clients, digital solution partners, Mak Meetings, Flyhii, Scienga Summits, Hyderabad IT company clients',
        canonical: `${BASE_URL}/#clients`,
    },
    contact: {
        title: 'Contact Us | Co-Linked Group – Hyderabad, India',
        description:
            'Get in touch with Co-Linked Group Private Limited. Visit us at Capital Park, Hyderabad or call +91 7842090097. Let\'s pioneer your next digital breakthrough.',
        keywords:
            'contact Co-Linked Group, web design Hyderabad contact, digital agency contact India, colinkedgroup.com contact',
        canonical: `${BASE_URL}/#contact`,
    },
    'event-management': {
        title: 'Event & Conference Management System | Co-Linked Group',
        description:
            'End-to-end digital Conference Management Systems by Co-Linked Group. Abstract submissions, peer reviews, registrations, and scheduling for scientific and corporate events.',
        keywords:
            'conference management system, event management software, abstract submission system, scientific conference platform, India',
        canonical: `${BASE_URL}/#event-management`,
    },
    'service-detail': {
        // Overridden per-service below
        title: 'Services | Co-Linked Group',
        description:
            'Discover Co-Linked Group\'s full range of digital services – web design, app development, UI/UX, HRMS, telemedicine, and more.',
        keywords: 'Co-Linked Group services, digital services India, IT solutions Hyderabad',
        canonical: `${BASE_URL}/#services`,
    },
};

const SERVICE_META = {
    'corporate-web-design': {
        title: 'Corporate Web Design | Co-Linked Group',
        description:
            'High-impact corporate website design by Co-Linked Group. We craft professional, scalable, and secure web presences for global enterprises.',
        keywords: 'corporate web design India, professional website design Hyderabad, enterprise web design',
    },
    'ecommerce-websites': {
        title: 'E-commerce Website Development | Co-Linked Group',
        description:
            'Scalable e-commerce websites built for maximum conversion by Co-Linked Group. Advanced payment gateways, inventory management & personalized shopping experiences.',
        keywords: 'e-commerce website development India, online store development Hyderabad, e-commerce solutions',
    },
    'customized-websites': {
        title: 'Custom Website Development | Co-Linked Group',
        description:
            'Bespoke custom websites tailored to unique business needs by Co-Linked Group. Beyond templates – unique, powerful, and business-specific digital solutions.',
        keywords: 'custom website development, personalized website India, bespoke web solutions Hyderabad',
    },
    'landing-page-design': {
        title: 'Landing Page Design | Co-Linked Group',
        description:
            'High-converting landing pages by Co-Linked Group. Combining psychological triggers with aesthetic precision to turn visitors into leads.',
        keywords: 'landing page design India, conversion optimized landing page, campaign page design',
    },
    'responsive-web-design': {
        title: 'Responsive Web Design | Co-Linked Group',
        description:
            'Mobile-first responsive web design by Co-Linked Group. Fluid, flawless experiences across all devices and screen sizes.',
        keywords: 'responsive web design India, mobile first website, cross-device web design Hyderabad',
    },
    'wire-framing': {
        title: 'Wireframing Services | Co-Linked Group',
        description:
            'Professional wireframing and UX blueprinting by Co-Linked Group. Solid information architecture and user flow foundations for your digital projects.',
        keywords: 'wireframing services India, UX wireframe design, information architecture Hyderabad',
    },
    'website-re-design': {
        title: 'Website Redesign Services | Co-Linked Group',
        description:
            'Modernize your legacy website with Co-Linked Group. Improved performance, updated aesthetics, and enhanced functionality to meet modern web standards.',
        keywords: 'website redesign India, website modernization, legacy website revamp Hyderabad',
    },
    'digital-experience': {
        title: 'Digital Experience Development | Co-Linked Group',
        description:
            'Immersive digital experience development by Co-Linked Group. Rich interactive web environments using the latest technologies for memorable digital narratives.',
        keywords: 'digital experience development, interactive web design India, immersive web experiences',
    },
    hrms: {
        title: 'HRMS Software Development | Co-Linked Group',
        description:
            'Comprehensive Human Resource Management Systems by Co-Linked Group. Streamline recruitment, payroll, and performance tracking for your workforce.',
        keywords: 'HRMS software development India, HR management system Hyderabad, HR software solutions',
    },
    'editorial-tracker': {
        title: 'Editorial Tracker System | Co-Linked Group',
        description:
            'Advanced editorial workflow management by Co-Linked Group. Real-time tracking, collaborative tools, and automation for high-volume publishing operations.',
        keywords: 'editorial tracker software, publishing workflow management, editorial management system India',
    },
    cms: {
        title: 'Conference Management System (CMS) | Co-Linked Group',
        description:
            'End-to-end Conference Management Systems by Co-Linked Group. Abstract submissions, peer reviews, registrations, and scheduling for scientific conferences.',
        keywords: 'conference management system India, CMS software, scientific conference platform, event management system',
    },
    telemedicine: {
        title: 'Telemedicine Platform Development | Co-Linked Group',
        description:
            'HIPAA-compliant telemedicine portals by Co-Linked Group. Video consultations, digital prescriptions, and health record management for healthcare providers.',
        keywords: 'telemedicine platform development India, healthcare app development, digital health solutions Hyderabad',
    },
    'logo-design': {
        title: 'Logo Design & Branding | Co-Linked Group',
        description:
            'Premium logo design and branding services by Co-Linked Group. Compelling visual identities that resonate with your audience and strengthen brand recognition.',
        keywords: 'logo design India, branding agency Hyderabad, visual identity design, brand identity',
    },
    'info-graphics': {
        title: 'Infographic Design Services | Co-Linked Group',
        description:
            'Professional infographic design by Co-Linked Group. Transform complex data into visually stunning, easy-to-digest stories that enhance communication.',
        keywords: 'infographic design India, data visualization, infographic services Hyderabad',
    },
    'web-banners': {
        title: 'Web Banner Design | Co-Linked Group',
        description:
            'Eye-catching digital web banners by Co-Linked Group. High-impact visuals optimized for various platforms to drive engagement and clicks.',
        keywords: 'web banner design India, digital advertising banners, display ad design Hyderabad',
    },
    'business-cards': {
        title: 'Business Card Design | Co-Linked Group',
        description:
            'Premium business card and print stationery design by Co-Linked Group. Leave a lasting impression that reflects your brand\'s quality and professionalism.',
        keywords: 'business card design India, professional card design Hyderabad, print design services',
    },
    ebook: {
        title: 'E-book Design Services | Co-Linked Group',
        description:
            'Professional digital e-book design by Co-Linked Group. Polished layouts and typography optimized for digital reading across all devices.',
        keywords: 'ebook design India, digital publication design, e-book layout services',
    },
    'android-apps': {
        title: 'Android App Development | Co-Linked Group',
        description:
            'Native Android app development by Co-Linked Group. Robust, performance-optimized Android applications that leverage the full potential of the platform.',
        keywords: 'Android app development India, Android mobile app Hyderabad, native Android development',
    },
    'ios-apps': {
        title: 'iOS App Development | Co-Linked Group',
        description:
            'Premium iOS app development by Co-Linked Group. Sophisticated, high-performance apps adhering to Apple\'s quality standards for seamless user experiences.',
        keywords: 'iOS app development India, iPhone app development Hyderabad, Apple app development',
    },
    'virtual-hosting': {
        title: 'Virtual Web Hosting | Co-Linked Group',
        description:
            'High-performance cloud virtual hosting by Co-Linked Group. Fast, reliable, and scalable infrastructure ensuring 99.9% uptime for your website.',
        keywords: 'virtual hosting India, cloud web hosting, VPS hosting Hyderabad',
    },
    'shared-hosting': {
        title: 'Shared Web Hosting | Co-Linked Group',
        description:
            'Cost-effective shared hosting plans by Co-Linked Group. The perfect balance of performance and value for growing businesses and startups.',
        keywords: 'shared hosting India, affordable web hosting, business hosting plans Hyderabad',
    },
    'content-writing': {
        title: 'Content Writing Services | Co-Linked Group',
        description:
            'SEO-optimized content writing by Co-Linked Group. Strategic storytelling that engages your audience, tells your brand story, and drives meaningful conversions.',
        keywords: 'content writing services India, SEO content writing Hyderabad, digital copywriting agency',
    },
};

const setMeta = (name, content, property = false) => {
    const attr = property ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
};

const setCanonical = (url) => {
    let el = document.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', url);
};

const SEO = ({ view, selectedService }) => {
    useEffect(() => {
        let meta = PAGE_META[view] || PAGE_META.home;

        // Override with service-specific meta if on service-detail view
        if (view === 'service-detail' && selectedService && SERVICE_META[selectedService]) {
            const svcMeta = SERVICE_META[selectedService];
            meta = {
                title: svcMeta.title,
                description: svcMeta.description,
                keywords: svcMeta.keywords,
                canonical: `${BASE_URL}/#services`,
            };
        }

        // Update document title
        document.title = meta.title;

        // Primary meta tags
        setMeta('description', meta.description);
        setMeta('keywords', meta.keywords);

        // Open Graph – update title & description dynamically
        setMeta('og:title', meta.title, true);
        setMeta('og:description', meta.description, true);
        setMeta('og:url', meta.canonical, true);

        // Twitter Card
        setMeta('twitter:title', meta.title);
        setMeta('twitter:description', meta.description);

        // Canonical
        setCanonical(meta.canonical);
    }, [view, selectedService]);

    return null; // Renders nothing — side-effect only
};

export default SEO;
