'use strict';

function fixedHeader() {
  let oldScrollY = 0;
  const header = document.querySelector('.main-header');

  window.addEventListener('scroll', function () {

    function hideHeader() {
      if (window.pageYOffset > header.offsetHeight) {
        header.classList.add('header-hide');
      } else {
        header.classList.remove('header-hide');
      }

      const button = document.querySelector(".main-nav__toggle");
      const list = document.querySelector(".main-nav__list");

      if (document.documentElement.clientWidth < 1180) {
        list.classList.add("main-nav__list--hidden");
        if (button.classList.contains('main-nav__toggle--opened')) {
          button.classList.add("main-nav__toggle--closed");
          button.classList.remove("main-nav__toggle--opened");
        }
      }
    }

    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let dY = scrolled - oldScrollY;

    if (dY < 0) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
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
