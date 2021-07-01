"use strict";

import '../scss/main.scss';
import '../index.html';

// Modules
import textShow from './modules/show-text';
import mapAnimation from './modules/map';
import pageNavigate from './modules/navigation';
import fixedHeader from './modules/header';
import listToggle from './modules/burger';
import buttonUp from './modules/btn-up';

// Libs
import Swiper, {
  Navigation
} from 'swiper';
const Blazy = require('blazy');
require('fslightbox');
import AOS from 'aos';


Swiper.use([Navigation]);

new Blazy({
  offset: 1000
});


window.addEventListener("DOMContentLoaded", () => {
  mapAnimation('#map');
  textShow();
  pageNavigate();
  fixedHeader();
  listToggle();
  buttonUp();

  AOS.init();

  new Swiper('#swiper-other', {
    speed: 400,
    direction: 'horizontal',
    navigation: {
      nextEl: '.other__next',
      prevEl: '.other__prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      678: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });

  new Swiper('#swiper-certificates', {
    speed: 400,
    direction: 'horizontal',
    navigation: {
      nextEl: '.certificates__next',
      prevEl: '.certificates__prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      605: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      880: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1140: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });
});
