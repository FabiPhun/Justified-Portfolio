function initNavigation() {
    const elements = {
        menuToggle: document.getElementById('menuToggle'),
        mobileMenu: document.getElementById('mobileMenu'),
        desktopNav: document.getElementById('desktopNav'),
        template: document.getElementById('navContentTemplate')
    };


    if (elements.template) {
        const content = elements.template.content.cloneNode(true);

        if (elements.desktopNav && elements.desktopNav.children.length === 0) {
            elements.desktopNav.appendChild(content.cloneNode(true));
        }


        if (elements.mobileMenu && elements.mobileMenu.children.length === 0) {
            elements.mobileMenu.appendChild(content.cloneNode(true));
        }
    }

    setupMobileMenu(elements.menuToggle, elements.mobileMenu);
    highlightActiveLink();
}

function setupMobileMenu(toggleButton, menuElement) {
    if (!toggleButton || !menuElement) {
        console.error('Mobile Nav Fehler:', {toggleButton, menuElement});
        return;
    }
    
    console.log('✅ Mobile Menu gefunden:', toggleButton, menuElement);
    
    // Entfernen Sie das cloneNode und verwenden Sie den original Button
    toggleButton.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔵 Button geklickt!');
        menuElement.classList.toggle('active');
        console.log('Menu active:', menuElement.classList.contains('active'));
    };
    
    // Wenn das nicht funktioniert, versuchen Sie addEventListener
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🟢 Event-Listener ausgelöst!');
        menuElement.classList.toggle('active');
    });
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link-main, .nav-link-sub');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    setTimeout(initNavigation, 100);
}