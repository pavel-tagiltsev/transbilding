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
    document.body.style.marginTop = `${header.clientHeight}px`;

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
            // document.body.style.marginTop = `${header.clientHeight}px`;
        } else {
            header.classList.remove('header-fixed');
            // document.body.style.marginTop = '0px';
        }
        
        hideHeader();
        oldScrollY = scrolled;
    });


    // Slider logic

    const swiper = new Swiper('#swiper-other', {
        speed: 400,
        // spaceBetween: 100,
        direction: 'horizontal',
        // slidesPerView: 3,
        navigation: {
            nextEl: '.other__next',
            prevEl: '.other__prev'
        },
        autoplay: {
            delay: 5000,
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

    const swiper2 = new Swiper('#swiper-certificates', {
        speed: 400,
        spaceBetween: 100,
        direction: 'horizontal',
        slidesPerView: 3,
        navigation: {
            nextEl: '.certificates__next',
            prevEl: '.certificates__prev'
        },
        autoplay: {
            delay: 5000,
        },
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 25
        //     },

        //     // when window width is >= 678px
        //     678: {
        //         slidesPerView: 2,
        //         spaceBetween: 50
        //     },

        //     // when window width is >= 1300px
        //     1300: {
        //         slidesPerView: 3,
        //         spaceBetween: 100
        //     }
        // }
    });

    const button = document.querySelector(".main-nav__toggle");
    const list = document.querySelector(".main-nav__list");

    // button.classList.remove("no--js");

    window.addEventListener('resize', () => {
        
        if (window.matchMedia("(min-width: 1180px)").matches) {
            list.classList.remove("main-nav--hidden");
        }
        if (window.matchMedia("(max-width: 1180px)").matches) {
            list.classList.add("main-nav--hidden");
        }
    });

    if (window.matchMedia("(max-width: 1180px)").matches) {
        list.classList.add("main-nav--hidden");
    }
    

    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        list.classList.toggle("main-nav--hidden");
        if (button.classList.contains("main-nav__toggle--opened")) {
            button.classList.remove("main-nav__toggle--opened");
            button.classList.add("main-nav__toggle--closed");
        } else {
            button.classList.remove("main-nav__toggle--closed");
            button.classList.add("main-nav__toggle--opened");
        }
    });

    // const img = document.querySelectorAll('img');

    // for (let i = 0; i < img.length; i++) {
    //     img[i].classList.add('b-lazy');
    //     img[i].setAttribute('data-src', `${img[i].getAttribute('src')}`);
    //     img[i].setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
    // }
    // console.log(img[2].getAttribute('data-src'));

    var bLazy = new Blazy({
        offset: 500
    });

});

//    if (window.matchMedia("(max-width: 1180px)").matches) {
//         ... ваша логика
//         которая не станет выполняться
//         если размер больше 540px
//     }