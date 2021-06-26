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
