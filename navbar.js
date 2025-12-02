// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    // Get current page to highlight active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navLinks = [
        { url: 'https://stelliums.org/', text: 'Home', match: ['', 'index.html'] },
        { url: 'https://hermesastrology.substack.com/p/readings', text: 'Astrology Readings' },
        { url: 'https://hermesastrology.substack.com/p/the-art-of-birth-chart-interpretation', text: 'Astrology Course' },
        { url: 'https://ko-fi.com/hermesastrology', text: 'Support' },
        { url: 'https://stelliums.org/about', text: 'About', match: ['about.html'] },
        { url: 'https://stelliums.org/contact', text: 'Contact', match: ['contact.html'] }
    ];
    
    let navHTML = '<nav class="site-nav">';
    
    navLinks.forEach(link => {
        const isActive = link.match && link.match.includes(currentPage);
        navHTML += `<a href="${link.url}" ${isActive ? 'class="active"' : ''}>${link.text}</a>`;
    });
    
    navHTML += '</nav>';
    
    // Insert after header
    const header = document.querySelector('header');
    if (header) {
        header.insertAdjacentHTML('afterend', navHTML);
    }
});
