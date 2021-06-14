"use strict";

window.addEventListener("DOMContentLoaded", () => {

    // Animation logic

    const animItems = document.querySelectorAll('._anim-items');


    if (animItems.length > 0) {

        const animOnScroll = function () {

            const offset = function (el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {
                    top: rect.top + scrollTop,
                    left: rect.left + scrollLeft
                };
            };

            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.pageYOffset > animItemOffset - animItemPoint) &&
                    window.pageYOffset < (animItemOffset + animItemPoint)) {
                    animItem.classList.add('_active');
                } 
            }

        };

        window.addEventListener('scroll', animOnScroll);
        animOnScroll();

    }


    // Navigation logic

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', (evt) => {
            evt.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    let btn = document.querySelector("#btn-up");

    btn.addEventListener('click', (evt) => {
        evt.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    function showUpButton() {
        if ((window.pageYOffset + document.documentElement.clientHeight) + 1000 >=
            document.documentElement.scrollHeight) {
            btn.classList.add("fixed");
        } else {
            btn.classList.remove("fixed");
        }
    }

    window.addEventListener('scroll', showUpButton);


    // Header logic

    // function headerScrollAnimation() {
    //     const header = document.querySelector('.main-header');

    //     function hideHeader() {
    //         if (window.pageYOffset > header.offsetHeight) {
    //             header.classList.add('header-hide');
    //         } else {
    //             header.classList.remove('header-hide');
    //         }
    //     }

    //     function fixedHeader() {
    //         if (window.pageYOffset > header.offsetHeight * 2) {
    //             header.classList.add('header-fixed');
    //             document.body.style.marginTop = `${header.clientHeight}px`;
    //         } else {
    //             header.classList.remove('header-fixed');
    //             document.body.style.marginTop = '0px';
    //         }
    //     }

    //     hideHeader();
    //     fixedHeader();
    // }

    // headerScrollAnimation();
    // window.addEventListener('scroll', headerScrollAnimation);

    let oldScrollY = 0;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', function () {

        function hideHeader() {
            if (window.pageYOffset > header.offsetHeight) {
                header.classList.add('header-hide');
            } else {
                header.classList.remove('header-hide');
            }
        }

        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        let dY = scrolled - oldScrollY;

        if (dY < 0) {
            header.classList.add('header-fixed');
            document.body.style.marginTop = `${header.clientHeight}px`;
        } else {
            header.classList.remove('header-fixed');
            document.body.style.marginTop = '0px';
        }
        
        hideHeader();
        oldScrollY = scrolled;
    });


    // Slider logic

    const swiper = new Swiper('#swiper', {
        speed: 400,
        // spaceBetween: 100,
        direction: 'horizontal',
        slidesPerView: 3,
        navigation: {
            nextEl: '.other__next',
            prevEl: '.other__prev'
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 25
            },

            // when window width is >= 678px
            678: {
                slidesPerView: 2,
                spaceBetween: 50
            },

            // when window width is >= 1300px
            1300: {
                slidesPerView: 3,
                spaceBetween: 100
            }
        }
    });

    const swiper2 = new Swiper('#swiper-2', {
        speed: 400,
        // spaceBetween: 100,
        direction: 'horizontal',
        slidesPerView: 3,
        navigation: {
            nextEl: '.certificates__next',
            prevEl: '.certificates__prev'
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 25
            },

            // when window width is >= 678px
            678: {
                slidesPerView: 2,
                spaceBetween: 50
            },

            // when window width is >= 1300px
            1300: {
                slidesPerView: 3,
                spaceBetween: 100
            }
        }
    });
});

   // if (window.matchMedia("(max-width: 540px)").matches) {
        // ... ваша логика
        // которая не станет выполняться
        // если размер больше 540px
    // }