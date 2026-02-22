function initNavigation() {
    const elements = {
        menuToggle: document.getElementById('menuToggle'),
        mobileMenu: document.getElementById('mobileMenu'),
        desktopNav: document.getElementById('desktopNav'),
        template: document.getElementById('navContentTemplate')
    };

    console.log('Navigation init:', elements);

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
        console.warn('Mobile Menu Elemente nicht gefunden');
        return;
    }


    const newToggle = toggleButton.cloneNode(true);
    toggleButton.parentNode.replaceChild(newToggle, toggleButton);


    newToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu toggle clicked');
        menuElement.classList.toggle('active');
    });


    document.addEventListener('click', (e) => {
        if (menuElement.classList.contains('active') &&
            !menuElement.contains(e.target) &&
            !newToggle.contains(e.target)) {
            menuElement.classList.remove('active');
        }
    });

    menuElement.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuElement.classList.remove('active');
        });
    });

    menuElement.addEventListener('click', (e) => {
        e.stopPropagation();
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