
const websiteServices = [
    {
        id: 1,
        title: "Landing Page",
        category: "Basic Websites",
        description: "A one-page site for effective promotion of a product or service with high conversion rates",
        price: 150,
        time: "5-7 business days",
        image: "img/landing.jpg",
        rating: 4.8,
        features: ["Responsive design", "Application form", "SEO optimization", "Analytics"]
    },
    {
        id: 2,
        title: "Corporate Website",
        category: "Business Solutions",
        description: "A professional online presence for your company with complete information about your business",
        price: 450,
        time: "12-15 business days",
        image: "img/corp.jpg",
        rating: 4.9,
        features: ["Up to 15 pages", "CMS system", "Multilingual support", "Blog"]
    },
    {
        id: 3,
        title: "Online Store",
        category: "E-commerce",
        description: "A full-featured platform for online sales with an easy-to-use admin panel",
        price: 800,
        time: "25-30 business days",
        image: "img/shop.jpg",
        rating: 4.7,
        features: ["Shopping cart", "Payment systems", "Customer account", "CRM"]
    },
    {
        id: 4,
        title: "Web Portal",
        category: "Comprehensive Solutions",
        description: "A multifunctional platform with various services for large-scale projects",
        price: 1200,
        time: "45-60 business days",
        image: "img/portal.jpg",
        rating: 4.6,
        features: ["User accounts", "Forums", "Calendars", "API integrations"]
    },
    {
        id: 5,
        title: "Business Card Website",
        category: "Basic Websites",
        description: "A compact solution for personal or small business online presence",
        price: 100,
        time: "3-5 business days",
        image: "img/vizitka.jpg",
        rating: 4.5,
        features: ["Contacts", "Gallery", "Testimonials", "Location map"]
    },
    {
        id: 6,
        title: "Blog Platform",
        category: "Content Projects",
        description: "A modern platform for publishing articles, news, and media content",
        price: 250,
        time: "8-10 business days",
        image: "img/blog.jpg",
        rating: 4.7,
        features: ["Comments", "Tags", "Subscriptions", "RSS"]
    },
    {
        id: 7,
        title: "Turnkey Website",
        category: "Comprehensive Solutions",
        description: "Full development cycle from design to hosting deployment",
        price: 600,
        time: "18-22 business days",
        image: "img/key.jpg",
        rating: 4.9,
        features: ["Unique design", "Technical support", "Training", "Domain + hosting"]
    },
    {
        id: 8,
        title: "Website Redesign",
        category: "Modernization",
        description: "Modern update of an outdated website with improved UX/UI",
        price: 350,
        time: "10-14 business days",
        image: "img/redesign.jpg",
        rating: 4.6,
        features: ["Current site analysis", "New design", "Optimization", "Testing"]
    },
    {
        id: 9,
        title: "Mobile Version",
        category: "Adaptation",
        description: "Optimizing an existing website for comfortable viewing on smartphones",
        price: 200,
        time: "5-7 business days",
        image: "img/mobile.jpg",
        rating: 4.7,
        features: ["Responsive design", "Speed optimization", "Mobile navigation", "Testing"]
    },
    {
        id: 10,
        title: "SEO Promotion",
        category: "Optimization",
        description: "A complete set of works to bring your website to the top of search engines",
        price: 150,
        time: "from 30 days",
        image: "img/seo.jpg",
        rating: 4.8,
        features: ["Audit", "Keywords", "Content strategy", "Reporting"]
    },
    {
        id: 11,
        title: "Technical Support",
        category: "Maintenance",
        description: "Regular maintenance and updates to ensure stable website operation",
        price: 50,
        time: "monthly",
        image: "img/sitesupport.jpg",
        rating: 4.9,
        features: ["Backup", "Updates", "Security", "Monitoring"]
    },
    {
        id: 12,
        title: "Contextual Advertising",
        category: "Marketing",
        description: "Setup and management of ad campaigns in search engines",
        price: 100,
        time: "5-7 business days",
        image: "img/ad.jpg",
        rating: 4.5,
        features: ["Google Ads", "Yandex.Direct", "Analysis", "Optimization"]
    },
    {
        id: 13,
        title: "Web Analytics",
        category: "Analytics",
        description: "Setting up analytics systems to understand visitor behavior",
        price: 80,
        time: "3-5 business days",
        image: "img/analytics.png",
        rating: 4.6,
        features: ["Google Analytics", "Yandex.Metrica", "Goals", "Dashboards"]
    },
    {
        id: 14,
        title: "Hosting and Domain",
        category: "Infrastructure",
        description: "Choosing and setting up reliable hosting with domain registration",
        price: 30,
        time: "1 day",
        image: "img/hosting.png",
        rating: 4.7,
        features: ["SSL certificate", "Backups", "Technical support", "Control panel"]
    },
    {
        id: 15,
        title: "Custom Design",
        category: "Design",
        description: "Development of a unique design according to your technical requirements",
        price: 250,
        time: "10-14 business days",
        image: "img/design.jpg",
        rating: 4.8,
        features: ["3 concepts", "UI/UX design", "Guideline", "Adaptation"]
    }
];

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="service-img">
        <div class="service-content">
            <h3 class="service-title">${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-price">${service.price.toLocaleString('en-EN')} $</div>
            <div class="service-rating">★ ${service.rating}/5</div>
            <p class="service-time">Delivery: ${service.time}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return card;
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('services-container');

    if (!container) {
        console.error('Service container not found!');
        return;
    }

    container.innerHTML = '';
    websiteServices.forEach(service => {
        container.appendChild(createServiceCard(service));
    });

});
