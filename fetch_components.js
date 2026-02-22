fetch('navbar/navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        setTimeout(() => {
            if (typeof initNavbar === 'function') {
                initNavbar();
            } else {
                const script = document.createElement('script');
                script.src = 'navbar/navbar.js?' + new Date().getTime();
                document.body.appendChild(script);

                script.onload = function () {
                    if (typeof initNavbar === 'function') {
                        initNavbar();
                    }
                };
            }
        }, 50);
    })
    .catch(error => {
        console.error('Fehler beim Laden der Navigation:', error);
        document.getElementById('navbar-container').innerHTML =
            '<div style="color:white; padding:20px;">couldnt load navbar</div>';
    });