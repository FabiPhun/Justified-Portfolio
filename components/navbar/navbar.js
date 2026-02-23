function initNavigation() {
    const elements = {
        menuToggle: document.getElementById('menuToggle'),
        mobileMenu: document.getElementById('mobileMenu'),
        desktopNav: document.getElementById('desktopNav'),
        template: document.getElementById('navContentTemplate')
    };

    createOverlay();

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
    
    adjustBodyContentPadding();
    window.addEventListener('resize', adjustBodyContentPadding);
}

function createOverlay() {
    if (!document.querySelector('.mobile-nav-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';
        document.body.appendChild(overlay);
    }
}

function adjustBodyContentPadding() {
    if (window.innerWidth <= 991) {
        const mobileNav = document.querySelector('.mobile-nav-container');
        const bodyContent = document.querySelector('.body_content');
        
        if (mobileNav && bodyContent) {
            const navHeight = mobileNav.offsetHeight;
            const rootStyles = getComputedStyle(document.documentElement);
            const basePadding = rootStyles.getPropertyValue('--mobile-body-content-container-padding').trim();
            
            if (basePadding) {
                const paddingParts = basePadding.split(' ');
                
                let newPadding;
                if (paddingParts.length === 3) {
                    newPadding = `calc(${navHeight}px + ${paddingParts[0]}) ${paddingParts[1]} ${paddingParts[2]} ${paddingParts[1]}`;
                } else if (paddingParts.length === 4) {
                    newPadding = `calc(${navHeight}px + ${paddingParts[0]}) ${paddingParts[1]} ${paddingParts[2]} ${paddingParts[3]}`;
                } else if (paddingParts.length === 1) {
                    newPadding = `calc(${navHeight}px + ${basePadding})`;
                } else {
                    newPadding = `${navHeight}px ${basePadding}`;
                }
                
                bodyContent.style.padding = newPadding;
            } else {
                bodyContent.style.paddingTop = navHeight + 'px';
            }
        }
    } else {
        const bodyContent = document.querySelector('.body_content');
        if (bodyContent) {
            bodyContent.style.padding = '';
        }
    }
}

function setupMobileMenu(toggleButton, menuElement) {
    if (!toggleButton || !menuElement) {
        console.warn('mobile nav error');
        return;
    }

    const overlay = document.querySelector('.mobile-nav-overlay');
    if (!overlay) return;

    const newToggle = toggleButton.cloneNode(true);
    toggleButton.parentNode.replaceChild(newToggle, toggleButton);

    function openMenu() {
        menuElement.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        menuElement.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    newToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (menuElement.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener('click', (e) => {
        if (menuElement.classList.contains('active') && 
            !menuElement.contains(e.target) && 
            !newToggle.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuElement.classList.contains('active')) {
            closeMenu();
        }
    });

    menuElement.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
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