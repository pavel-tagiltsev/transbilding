"use strict";

import scrollAnimation from './modules/animation';
import mapAnimation from './modules/map';
import pageNavigate from './modules/navigation';
import fixedHeader from './modules/header';
import listToggle from './modules/burger';
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);



const Blazy = require('blazy');
new Blazy({
    // Options
});



window.addEventListener("DOMContentLoaded", () => {
    mapAnimation('#map');
    scrollAnimation();
    pageNavigate();
    fixedHeader();
    listToggle();

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
                spaceBetween: 25
            },

            678: {
                slidesPerView: 2,
                spaceBetween: 50
            },

            1300: {
                slidesPerView: 3,
                spaceBetween: 50
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

            678: {
                slidesPerView: 2,
                spaceBetween: 50
            },

            1300: {
                slidesPerView: 3,
                spaceBetween: 100
            }
        }
    });
});