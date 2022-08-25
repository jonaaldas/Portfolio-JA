/*!
 * Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // get data from youtube API
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCy_IrkLSYfaSQL3CNCx9jbA&maxResults=5&order=date&key=AIzaSyBJDm0n7WNmPS6E3132ZHiV5KdxuVpEnDo')
        .then(res => res.json())
        .then(data => {
            const ytData = data.items
            let ytContainer = document.querySelector('.yt-container')
            for (let i of ytData) {
                ytContainer.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-5">
                    <a href='https://www.youtube.com/watch?v=${i.id.videoId}'>
                        <div class="portfolio-item mx-auto" >
                            <img class="img-fluid" src='${i.snippet.thumbnails.high.url}' alt="..." />
                            <h3 class='text-secondary'>${i.snippet.title}<h3/>
                        </div>
                    </a>
                </div>              
                `
            }
        })

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});