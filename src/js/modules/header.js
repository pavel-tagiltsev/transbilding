'use strict';

function fixedHeader() {
    let oldScrollY = 0;
    const header = document.querySelector('.main-header');
    // document.body.style.marginTop = `${header.clientHeight}px`;

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
}

export default fixedHeader;



// Шапка липнет при скролле

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
