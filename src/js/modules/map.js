'use strict';

function mapAnimation(mapSelector) {

  // To get right center
  let MagicY = 5;
  let MagicX = 2.5;

  const map = document.querySelector(mapSelector);

  let pinCoords = [{
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

  pinCoords.map(obj => {
    obj.x = 100 * obj.x / 1260;
    obj.y = 100 * obj.y / 674;
  });

  for (let i = 0; i < pinCoords.length; i++) {
    const pin = document.createElement('div');

    pin.setAttribute('data-aos', 'fade-down');
    pin.setAttribute('data-aos-once', 'true');
    pin.setAttribute('data-aos-anchor', '#map');
    pin.setAttribute('data-aos-delay',`${i * 100}`);
    pin.setAttribute('data-aos-duration', '1000');
    pin.style.top = `${pinCoords[i].y - MagicY}%`;
    pin.style.left = `${pinCoords[i].x - MagicX}%`;
    pin.classList.add('map__pin');

    map.appendChild(pin);
  }
}


export default mapAnimation;
