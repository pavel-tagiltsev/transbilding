'use strict';

  // Helps to get coords

function getCoords(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const arrCoords = [];

    section.addEventListener('click', (evt) => {
        console.log((evt.pageX - section.offsetLeft) + ':' + (evt.pageY - section.offsetTop));

        let PinCoord = {
            x: evt.pageX - section.offsetLeft,
            y: evt.pageY - section.offsetTop
        };

        arrCoords.push(PinCoord);

        console.log(arrCoords);
    });
}

export default getCoords;

//    if (window.matchMedia("(max-width: 1180px)").matches) {
//         ... ваша логика
//         которая не станет выполняться
//         если размер больше 540px
//     }
