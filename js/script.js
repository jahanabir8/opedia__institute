jQuery(document).ready(function() {

    //   Brand section
    function setDots() {
        $(".owl-dots").removeClass('disabled');
    }
    $('.activiteis-wrap').owlCarousel({
        loop: true,
        margin: 60,
        responsiveClass: true,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 1,
                nav: false
            },
            992: {
                items: 3,
                loop: true
            }
        },
        onInitialized: setDots,
        onChanged: setDots
    })

    // Clients
    // $('.client-wrapper').owlCarousel({
    //   loop:true,
    //   margin:10,
    //   responsiveClass:true,
    //   dots:true,
    //   nav:false,
    //   responsive:{
    //       0:{
    //           items:3,
    //           nav:false
    //       },
    //       576:{
    //           items:4,
    //           nav:false
    //       },
    //       992:{
    //           items:5,
    //           loop:true
    //       }
    //   },
    // })
    // new WOW().init();




    // smooth scrool
    // var html_body = $('html, body');
    // $('a.nav-link.contact').on('click', function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             html_body.animate({
    //                 scrollTop: target.offset().top - 0
    //             }, 100);
    //             return false;
    //         }
    //     }
    // });	








    // Header
    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)


    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
        const header = document.getElementById('header')
            // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')

        if (window.matchMedia("(min-width: 768px)").matches) {
            if (this.scrollY >= 220) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header')
            if (this.scrollY >= 220) header.classList.add('header-show');
            else header.classList.remove('header-show')
        }
    }
    window.addEventListener('scroll', scrollHeader)


});