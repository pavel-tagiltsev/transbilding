'use strict';

window.addEventListener("DOMContentLoaded", () => {
    // Map animation logic

    const map = document.querySelector('#map');
    
    let pinCoords = [
        {
            "x": 141,
            "y": 270
        },
        {
            "x": 134,
            "y": 303
        },
        {
            "x": 138,
            "y": 336
        },
        {
            "x": 76,
            "y": 393
        },
        {
            "x": 117,
            "y": 395
        },
        {
            "x": 167,
            "y": 402
        },
        {
            "x": 213,
            "y": 406
        },
        {
            "x": 255,
            "y": 407
        },
        {
            "x": 242,
            "y": 369
        },
        {
            "x": 287,
            "y": 377
        },
        {
            "x": 207,
            "y": 356
        },
        {
            "x": 224,
            "y": 341
        },
        {
            "x": 247,
            "y": 332
        },
        {
            "x": 204,
            "y": 318
        },
        {
            "x": 228,
            "y": 301
        },
        {
            "x": 184,
            "y": 296
        },
        {
            "x": 204,
            "y": 282
        },
        {
            "x": 158,
            "y": 301
        },
        {
            "x": 173,
            "y": 271
        },
        {
            "x": 201,
            "y": 215
        },
        {
            "x": 237,
            "y": 172
        },
        {
            "x": 478,
            "y": 481
        },
        {
            "x": 560,
            "y": 469
        },
        {
            "x": 513,
            "y": 512
        },
        {
            "x": 589,
            "y": 543
        }
    ];

    function setPin() {
        // To get right center
        const MagicY = 26;
        const MagicX = 12.5;

        function addZero(number) {
            if (number < 10) {
                return `0.${number}`;
            } 
    
            if (number >= 10) {
                return number / 10;
            } 
    
            return number;
        }

        for (let i = 0; i < pinCoords.length; i++) {
            const pin = document.createElement('div');
            pin.style = `
                top: ${pinCoords[i].y - MagicY}px;
                left: ${pinCoords[i].x - MagicX}px;
                transition: all 1s ease ${addZero(i)}s;
            `;
    
            pin.classList.add('map__pin', '_anim-items', '_hide-pin');
    
            map.appendChild(pin);
        }
    }

    setPin();

    // Helps to get coords

    // function getCoords(sectionSelector) {
    //     const section = document.querySelector(sectionSelector);
    //     const arrCoords = [];
    
    //     section.addEventListener('click', (evt) => {
    //         console.log((evt.pageX - section.offsetLeft) + ':' + (evt.pageY - section.offsetTop));
    
    //         let PinCoord = {
    //             x: evt.pageX - section.offsetLeft,
    //             y: evt.pageY - section.offsetTop
    //         };
    
    //         arrCoords.push(PinCoord);
    
    //         console.log(arrCoords);
    //     });
    // }

    // getCoords('#map');

});


