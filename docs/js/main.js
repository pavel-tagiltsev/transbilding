(()=>{var t={180:(t,e,a)=>{"use strict";a(353);const s=function(){var t=document.querySelectorAll(".projects__link"),e=0;document.documentElement.clientWidth>767&&document.addEventListener("aos:in",(function(a){var s=a.detail;"trigger"==s.getAttribute("data-aos")&&(console.log("something"),s.setAttribute("data-aos","trigger-done"),t[0].classList.add("projects__link--active"),setInterval((function(){t[e].classList.add("projects__link--active"),e++,setTimeout((function(){t[e-1].classList.remove("projects__link--active")}),2700),e>=t.length&&setTimeout((function(){e=0}),2850)}),3e3))}))};const i=function(t){var e=document.querySelector(t),a=[{x:141,y:270},{x:134,y:303},{x:138,y:336},{x:76,y:393},{x:117,y:395},{x:167,y:402},{x:213,y:406},{x:255,y:407},{x:242,y:369},{x:287,y:377},{x:207,y:356},{x:224,y:341},{x:247,y:332},{x:204,y:318},{x:228,y:301},{x:184,y:296},{x:204,y:282},{x:158,y:301},{x:173,y:271},{x:201,y:215},{x:237,y:172},{x:478,y:481},{x:560,y:469},{x:513,y:512},{x:589,y:543}];a.map((function(t){t.x=100*t.x/1260,t.y=100*t.y/674}));for(var s=0;s<a.length;s++){var i=document.createElement("div");i.setAttribute("data-aos","fade-down"),i.setAttribute("data-aos-once","true"),i.setAttribute("data-aos-anchor","#map"),i.setAttribute("data-aos-delay","".concat(100*s+500)),i.setAttribute("data-aos-duration","1000"),i.style.top="".concat(a[s].y-5,"%"),i.style.left="".concat(a[s].x-2.5,"%"),i.classList.add("map__pin"),e.appendChild(i)}};function l(t,e){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return r=t.done,t},e:function(t){o=!0,l=t},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw l}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}const r=function(){var t,e=l(document.querySelectorAll('a[href*="#"]'));try{var a=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var a=e.getAttribute("href").substr(1);document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})}))};for(e.s();!(t=e.n()).done;)a()}catch(t){e.e(t)}finally{e.f()}};const o=function(){var t=0,e=document.querySelector(".main-header");window.addEventListener("scroll",(function(){var a=window.pageYOffset||document.documentElement.scrollTop;a-t<0?e.classList.add("header-fixed"):e.classList.remove("header-fixed"),function(){window.pageYOffset>e.offsetHeight?e.classList.add("header-hide"):e.classList.remove("header-hide");var t=document.querySelector(".main-nav__toggle"),a=document.querySelector(".main-nav__list");document.documentElement.clientWidth<1180&&(a.classList.add("main-nav__list--hidden"),t.classList.contains("main-nav__toggle--opened")&&(t.classList.add("main-nav__toggle--closed"),t.classList.remove("main-nav__toggle--opened")))}(),t=a}))};const n=function(){var t=document.querySelector(".main-nav__toggle"),e=document.querySelector(".main-nav__list");window.addEventListener("resize",(function(){window.matchMedia("(min-width: 1180px)").matches&&e.classList.remove("main-nav__list--hidden"),window.matchMedia("(max-width: 1180px)").matches&&e.classList.add("main-nav__list--hidden")})),window.matchMedia("(max-width: 1180px)").matches&&e.classList.add("main-nav__list--hidden"),t.addEventListener("click",(function(a){a.preventDefault(),e.classList.toggle("main-nav__list--hidden"),t.classList.contains("main-nav__toggle--opened")?(t.classList.remove("main-nav__toggle--opened"),t.classList.add("main-nav__toggle--closed")):(t.classList.remove("main-nav__toggle--closed"),t.classList.add("main-nav__toggle--opened"))}))};const _=function(){var t=document.querySelector("#btn-up");t.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){window.pageYOffset+document.documentElement.clientHeight+1e3>=document.documentElement.scrollHeight?t.classList.add("fixed"):t.classList.remove("fixed")}))};var d=a(205),m=a(296),p=a(566),h=a.n(p),g=a(978);a(894),d.Z.use([m.Z]),new g({offset:1e3}),window.addEventListener("DOMContentLoaded",(function(){i("#map"),s(),r(),o(),n(),_(),h().init(),new d.Z("#swiper-other",{speed:400,direction:"horizontal",navigation:{nextEl:".other__next",prevEl:".other__prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:0},678:{slidesPerView:2,spaceBetween:0},1300:{slidesPerView:3,spaceBetween:0}}}),new d.Z("#swiper-certificates",{speed:400,direction:"horizontal",navigation:{nextEl:".certificates__next",prevEl:".certificates__prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:25},605:{slidesPerView:2,spaceBetween:50},880:{slidesPerView:3,spaceBetween:50},1140:{slidesPerView:4,spaceBetween:50},1300:{slidesPerView:3,spaceBetween:50}}})}))},171:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/expertise-1_заглушка.jpg"},622:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/expertise-3_заглушка.jpg"},727:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/expertise-4_заглушка.jpg"},175:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/expertise-5_заглушка.jpg"},938:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/expertise-6_заглушка.jpg"},722:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/map_заглушка.jpg"},71:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/team-1_заглушка.jpg"},30:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/team-2_заглушка.jpg"},1:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/team-3_заглушка.jpg"},365:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/team-4_заглушка.jpg"},947:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/библиотека_заглушка.jpg"},55:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/жукова_заглушка.jpg"},469:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/космос_заглушка.jpg"},286:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/линия_жизни_заглушка.jpg"},462:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/можайский_заглушка.jpg"},268:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/музей_обороны_заглушка.jpg"},708:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/музей_победы_заглушка.jpg"},725:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/телеком_заглушка.jpg"},291:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const s=a.p+"./img/logo_trans.png"},353:(t,e,a)=>{var s=a(370),i=a(291),l=a(171),c=a(622),r=a(727),o=a(175),n=a(938),_=a(722),d=a(71),m=a(30),p=a(1),h=a(365),g=a(947),u=a(55),f=a(469),v=a(708),b=a(462),x=a(725),y=a(268),w=a(286),j=s(i),z=s(l),E='<!DOCTYPE html> <html lang="ru"> <head> <meta charset="UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <meta name="description" content="15 лет в России и за рубежом, более 500\n    объектов жилого и нежилого назначения, любые объемы работ от\n    проектирования до готового сооружения."/> <link rel="shortcut icon" href="logo_trans.svg" type="image/x-icon"/> <title>Трансстрой</title> </head> <body> <header class="main-header"> <div class="container"> <div class="main-header__wrapper"> <a class="main-header__logo-link" href="#"> <img class="main-header__logo-img" src="'+j+'" width="269" height="50" alt="Логотип компании Трансстрой"/> </a> <button class="main-nav__toggle main-nav__toggle--closed no--js" type="button" aria-label="Открыть меню"></button> <nav class="main-nav"> <ul class="main-nav__list"> <li class="main-nav__item"> <a class="main-nav__link" href="#about">О компании</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#team">Команда и ресурсы</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#other">Виды работ</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#projects">Портфолио</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#competence">Наши компетенции</a> </li> </ul> </nav> </div> </div> </header> <main> <h1 class="visually-hidden">Главная страница компании "Трансстрой"</h1> <section class="promo b-lazy" data-src="img/blazy/hd-bg.jpg"> <div class="container"> <div class="promo__wrapper"> <div class="promo__lead"> <h2 class="promo__title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" data-aos-once="true"> Cтроительство<br> ремонт<br> реконструкция<br> <span>под ключ</span> </h2> <p class="promo__text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"> 15 лет в России, более 500 объектов жилого и нежилого назначения, любые объемы работ от проектирования до готового сооружения. </p> <div class="buttons-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true"> <a class="button" href="#partners">Заказчики</a> <a class="button" href="#certificates">Рекомендации</a> </div> </div> </div> </div> </section> <section class="expertise container"> <ul class="expertise__list"> <li class="expertise__item" data-aos="expertise-1" data-aos-duration="1000" data-aos-once="true"> <img class="expertise__img b-lazy" src="'+z+'" data-src="img/blazy/expertise-1.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--manhole">Устройство наружных сетей канализации</h3> </li> <li class="expertise__item" data-aos="expertise-2" data-aos-duration="1000" data-aos-once="true"> <img class="expertise__img b-lazy" src="'+z+'" data-src="img/blazy/expertise-2.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--pipe-closed">Устройство наружных сетей теплоснабжения </h3> </li> <li class="expertise__item" data-aos="expertise-3" data-aos-duration="1000" data-aos-once="true"> <img class="expertise__img b-lazy" src="'+s(c)+'" data-src="img/blazy/expertise-3.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--traffic-cone">Строительство дорог и благоустройство территорий</h3> </li> <li class="expertise__item" data-aos="expertise-4" data-aos-duration="1000" data-aos-once="true"> <img class="expertise__img b-lazy" src="'+s(r)+'" data-src="img/blazy/expertise-4.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--electricity">Устройство наружных электрических сетей и линий связи</h3> </li> <li class="expertise__item" data-aos="expertise-5" data-aos-duration="1000" data-aos-once="true"> <img class="expertise__img b-lazy" src="'+s(o)+'" data-src="img/blazy/expertise-5.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--engine">Строительство внутренних инженерных систем и оборудования зданий и сооружений</h3> </li> <li class="expertise__item" data-aos="expertise-6" data-aos-duration="1000" data-aos-once="true"> <img class="expertise__img b-lazy" src="'+s(n)+'" data-src="img/blazy/expertise-6.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--pipe">Устройство наружных и внутренних сетей водостабжения, водоподготовка</h3> </li> </ul> </section> <section id="about" class="about b-lazy" data-src="img/blazy/shutter.jpg"> <div class="about__blur"> <div class="container"> <div class="about__content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"> <h2 class="about__title title">О компании</h2> <p class="about__text">Наша компания выполняет работы по строительству, ремонту и реконструкции зданий уже 15 лет в России. За это время выполнено более 500 объектов жилого и нежилого назначения. Наши возможности позволяют выполнять любые объемы работ от проектирования до готового сооружения. Мы можем отремонтировать как небольшие здания, так и объекты с полным комплексом работ, как капитального ремонта, так и реконструкции и монтажу, в том числе инженерных систем.</p> <h3 class="about__subtitle">В сферу нашей деятельности входит ремонт и строительство следующих типов зданий: </h3> <ul class="about__list"> <li class="about__item"> Офисные, административные здания, музеи, памятники и сооружения культурного наследия </li> <li class="about__item"> Торговые центры, магазины </li> <li class="about__item"> Коттеджи, таунхаусы, загородные дома </li> <li class="about__item"> Производственные и складские здания </li> <li class="about__item"> Медицинские центры, поликлиники, больницы </li> <li class="about__item"> Гостиницы, пансионаты, санатории </li> <li class="about__item"> Сооружения специального назначения </li> </ul> </div> </div> </div> </section> <div class="container"> <section class="map"> <div id="map" class="map__wrapper"> <img class="map__img b-lazy" src="'+s(_)+'" data-src="img/blazy/map.jpg" width="650" height="325" alt="Карта россии"> </div> <div class="map__content"> <h2 class="map__title title">География проектов</h2> <div class="map__inner"> <div class="map__column"> <h3 class="map__subtitle subtitle">Районы московской области</h3> <ul class="map__list-area"> <li class="map__list__item">Раменское</li> <li class="map__list__item">Каширский</li> <li class="map__list__item">Подольский</li> <li class="map__list__item">Домодедовский</li> <li class="map__list__item">Ступинский</li> <li class="map__list__item">Люберецкий</li> <li class="map__list__item">Чеховский</li> <li class="map__list__item">Ленинский</li> <li class="map__list__item">Истринский</li> <li class="map__list__item">Можайский</li> <li class="map__list__item">Одинцовский</li> </ul> <h3 class="map__subtitle subtitle">Регионы России</h3> <ul class="map__list-country-start"> <li class="map__item">Новгородская область</li> <li class="map__item">Белгородская область</li> <li class="map__item">Брянская область</li> <li class="map__item">Владимирская область</li> <li class="map__item">Волгоградская область</li> <li class="map__item">Иркутская область</li> </ul> </div> <div class="map__column"> <ul class="map__list-coutry-end"> <li class="map__item">Калужская область</li> <li class="map__item">Кемеровская область</li> <li class="map__item">Краснодарский край</li> <li class="map__item">Красноярский край</li> <li class="map__item">Курская область</li> <li class="map__item">Ленинградская область и СПБ</li> <li class="map__item">Республика Мордовия</li> <li class="map__item">Новосибирская область</li> <li class="map__item">Омская область</li> <li class="map__item">Орловская область</li> <li class="map__item">Пензенская область</li> <li class="map__item">Ростовская область</li> <li class="map__item">Рязанская область</li> <li class="map__item">Самарская область</li> <li class="map__item">Саратовская область</li> <li class="map__item">Республика Татарстан</li> <li class="map__item">Томская область</li> <li class="map__item">Тульская область</li> <li class="map__item">Ульяновская область</li> <li class="map__item">Нижегородская область</li> </ul> </div> </div> </div> </section> </div> <section id="team" class="team"> <div class="team__line container"> <h2 class="team__title title title--2">Команда и ресурсы</h2> <div class="team__wrapper"> <div class="team__card" data-aos="team-1" data-aos-duration="1000" data-aos-once="true"> <img class="team__img b-lazy" src="'+s(d)+'" data-src="img/blazy/team-1.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--wheel">Собственные машины<br> и механизмы </h3> <ul class="team__list"> <li class="team__item">Грузовики DAF гп. 10 тн</li> <li class="team__item">Манипуляторы ISUZU гп. 5 тн</li> <li class="team__item">Тракторы JCB 3 cx</li> <li class="team__item">Тракторы Mustang (mini)</li> <li class="team__item">Автобусы грузопассажирские</li> </ul> </div> </div> <div class="team__card" data-aos="team-2" data-aos-duration="1000" data-aos-once="true"> <img class="team__img b-lazy" src="'+s(m)+'" data-src="img/blazy/team-2.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--crane">Навесное оборудование</h3> <ul class="team__list"> <li class="team__item">Ямобуры 300 / 500 / 600 мм</li> <li class="team__item">Комплекты для траншей</li> </ul> </div> </div> <div class="team__card" data-aos="team-3" data-aos-duration="1000" data-aos-once="true"> <img class="team__img b-lazy" src="'+s(p)+'" data-src="img/blazy/team-3.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--builder">Собственный персонал</h3> <ul class="team__list"> <li class="team__item">Монтажники - 12</li> <li class="team__item">Электрики - 14</li> <li class="team__item">Рабочие - 40</li> <li class="team__item">Геодезисты - 4 (12*)</li> <li class="team__item">ИТР - 6</li> </ul> </div> </div> <div class="team__card" data-aos="team-4" data-aos-duration="1000" data-aos-once="true"> <img class="team__img b-lazy" src="'+s(h)+'" data-src="img/blazy/team-4.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--aerial-platform">Арендованная техника</h3> <ul class="team__list"> <li class="team__item">Автовышка 20 / 30 / 45 м</li> </ul> </div> </div> </div> </div> </section> <div class="build-design__wrapper b-lazy container" data-src="img/blazy/Background.jpg"> <section class="building"> <h2 class="building__title title title--1">Строительство</h2> <ol class="building__list" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true"> <li class="building__item">Геодезические работы</li> <li class="building__item">Земляные работы</li> <li class="building__item">Свайные работы, закрепление грунтов</li> <li class="building__item">Монтаж сборных бетонных и железобетонных конструкций</li> <li class="building__item">Монтаж металических конструкций</li> <li class="building__item">Монтаж деревянных конструкций</li> <li class="building__item">Устройство кровель</li> <li class="building__item">Фасадные работы</li> <li class="building__item">Монтажные работы</li> <li class="building__item">Пусконаладочные работы</li> <li class="building__item">Устройство автомобильных дорог</li> <li class="building__item">Работы по осуществлению строительного контроля</li> <li class="building__item">Работы по организации строительства, реконструкции и капитального ремонта</li> </ol> </section> <section class="design"> <h2 class="design__title title title--2">Проектирование</h2> <ol class="design__list" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true"> <li class="design__item">Работы по подготовке схемы планировочной организации земельного участка;</li> <li class="design__item">Работы по подготовке сведений о внутреннем инженерном оборудовании, внутренних сетях инженерно-технического обеспечения, о перечне инженерно-технических мероприятий;</li> <li class="design__item">Работы по подготовке сведений о наружных сетях инженерно-технического обеспечения, о перечне инженерно-технических мероприятий;</li> <li class="design__item">Работы по подготовке технологических решений;</li> <li class="design__item">Работы по разработке специальных разделов проектной документации;</li> <li class="design__item">Работы по подготовке проектов организации строительства, сносу и демонтажу зданий и сооружений, продлению срока эксплуатации и консервации;</li> <li class="design__item">Работы по подготовке проектов мероприятий по охране окружающей среды;</li> <li class="design__item">Работы по подготовке проектов мероприятий по обеспечению пожарной безопасности;</li> <li class="design__item">Работы по подготовке проектов мероприятий по обеспечению доступа маломобильных групп населения;</li> <li class="design__item">Работы по обследованию строительных конструкций, зданий и сооружений.</li> </ol> </section> </div> <section id="projects" class="projects container" data-aos="trigger" data-aos-offset="0"> <h2 class="projects__title title--1 title">Портфолио</h2> <ul class="projects__list"> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(g)+'" data-src="img/blazy/библиотека.jpg" alt="Российская государственная библиотека им. Ленина."> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Российская государственная библиотека<br> им. Ленина</h3> </div> </li> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(u)+'" data-src="img/blazy/жукова.jpg" alt="Музей Маршала Советского Союза Г. К. Жукова."> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Музей Маршала Советского Союза<br> Г. К. Жукова</h3> </div> </li> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(f)+'" data-src="img/blazy/космос.jpg" alt="Московский Музей космонавтики"> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Московский Музей космонавтики</h3> </div> </li> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(v)+'" data-src="img/blazy/музей_победы.jpg" alt="Музей Победы в Великой Отечественной войне 1941-1945 гг."> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Музей Победы в Великой Отечественной войне<br> 1941-1945 гг</h3> </div> </li> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(b)+'" data-src="img/blazy/можайский.jpg" alt="Администрация Можайского городского округа."> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Администрация Можайского городского округа</h3> </div> </li> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(x)+'" data-src="img/blazy/телеком.jpg" alt="Телеком направление."> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Телеком направление</h3> </div> </li> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(y)+'" data-src="img/blazy/музей_обороны.jpg" alt="Государственный музей обороны Москвы."> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Государственный музей обороны Москвы</h3> </div> </li> <li class="projects__item"> <img class="projects__img b-lazy" src="'+s(w)+'" data-src="img/blazy/линия_жизни.jpg" alt="Центр репродукции «Линия жизни»."> <div class="projects__link" data-aos="show-text" data-aos-offset="360" data-aos-mirror="true"> <h3 class="projects_subtitle">Центр репродукции<br> «Линия жизни»</h3> </div> </li> </ul> </section> <section id="competence" class="competence b-lazy" data-src="img/blazy/competence-bg.png"> <div class="competence__wrapper container"> <h2 class="competence__title title--2 title">Текушие компетенции</h2> <ol class="competence__list"> <li class="competence__item" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" data-aos-anchor="#competence" data-aos-once="true"> <h3 class="competence__subtitle subtitle">Стандартизированные проектные решения, </h3> <p class="competence__text"> основанные на лучших мировых практиках, направленные на энергоэффективность и снижение эксплуатационных затрат. </p> </li> <li class="competence__item" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" data-aos-anchor="#competence" data-aos-once="true"> <h3 class="competence__subtitle subtitle">Строительство и ремонт только собственными силами. </h3> <p class="competence__text"> Наличие всех необходимых ресурсов и выполнение требований по охране труда и промышленной безопасности на объектах. </p> </li> <li class="competence__item" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="1000" data-aos-anchor="#competence" data-aos-once="true"> <h3 class="competence__subtitle subtitle">Полный цикл работ </h3> <p class="competence__text"> по технологическому присоединению к инженерным сетям. </p> </li> <li class="competence__item" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000" data-aos-anchor="#competence" data-aos-once="true"> <h3 class="competence__subtitle subtitle">Функциональный сервис. </h3> <p class="competence__text"> Фокус только на решение необходимых заказчику задач для оптимизации капитальных вложений с возможностью дальнейшей разработки программ развития объектов. </p> </li> <li class="competence__item" data-aos="zoom-in" data-aos-delay="1300" data-aos-duration="1000" data-aos-anchor="#competence" data-aos-once="true"> <h3 class="competence__subtitle subtitle">Работа по заявкам: </h3> <p class="competence__text"> организация, управление и автоматизация диспетчерских служб. Аварийные (4 часа) и плановые (24 часа) выезды ремонтных бригад. </p> </li> </ol> </div> </section> <section id="other" class="other container"> <h2 class="other__title title--1 title">Другие виды выполняемых работ</h2> <div id="swiper-other" class="swiper-container"> <div class="other__list swiper-wrapper"> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--tower">Устройство высоковольтной кабельной линии</h3> <p class="other__text"> Прокладка двух кабельных линий 10кВ, состоящих из участка воздушнойлинии и участка подземной линии. Установка и обвязка КРУ 10 кВ. Монтаж линии для подключения трансформаторов. Подготовка и организация комплексных испытаний кабельных линий. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--shield">Поставка и монтаж трансформаторов</h3> <p class="other__text"> Подбор оптимального трансформаторного оборудования, решение вопросов логистики и установки на проектные места крупногабаритныхтрансформаторов. Комплексные электромонтажные работы, включающие монтаж высоковольтных кабельных трасс, работа с производителемшинопровода при изготовлении необходимой конфигурации, его монтаж и подключение. Монтаж контрольных цепей для управляющих температурным режимом и отключением трансформаторов шкафов управления. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--ammeter">ГРЩ</h3> <p class="other__text"> Подбор производителя крупногабаритного щитового оборудования(ВП, ГРЩ). Участие в оптимизации компоновки ВП и ГРЩ, размещение заказа на производство и контроль при изготовлении. Расстановка, монтаж ВП и ГРЩ, расключение отходящих кабельных линий. Проведение пусконаладочных работ с инженерной службой Изготовителя. Сдача в эксплуатацию. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--plug">Подключение инженерных систем</h3> <p class="other__text"> Подключение различных инженерных систем предприятия, требующих электропитания: компрессорное, холодильное, вентиляционное оборудование. Обеспечение сетей гарантированного питания для противопо жарных систем, для систем аварийного управления эвакуацией. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--gear">Монтаж технологического оборудования</h3> <p class="other__text"> Взаимодействие с наладочными инженерными службами производителей и поставщиков технологического оборудования. Работа в интернациональной команде. Помощь при монтаже и пусконаладочных работах технологического оборудования. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--bulb">Офисные работы</h3> <p class="other__text"> Монтаж сетей освещения и розеточных сетей в офисных помещениях повышенного класса отделки. Сборка и установка сложных авторских конструкций с учетом повышенных требований к качеству работ. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--paper">Доработка проектно-сметной документации</h3> <p class="other__text"> Работа с заказчиком и проектировщиком для оптимизации проектных решений, с целью снижения стоимости и уменьшения сроков поставки. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--microchip">Электрический сети 0,4 КВ</h3> <p class="other__text"> Комплексный монтаж электросетей предприятия. Монтаж сигнальных, управляющих и информационных наружных сетей по территории предприятия. Лабораторные замеры и акты при сдаче сетей в эксплуатацию. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--plug-2">СКС</h3> <p class="other__text"> Прокладка как офисных, так и промышленных сетей СКС. Помощь в раз работке проектировщиком документации по применяемым на производстве информационным кабелям. </p> </div> </div> </div> </div> <div class="swiper-button-prev other__prev"> <span class="visually-hidden">Назад</span> </div> <div class="swiper-button-next other__next"> <span class="visually-hidden">Вперед</span> </div> </section> <section id="partners" class="partners"> <div class="container"> <div class="partners__wrapper"> <h2 class="partners__title title--2 title">Наши заказчики</h2> <ul class="partners__list"> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (8).svg" width="80" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (9).png" width="84" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (10).png" width="113" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (4).png" width="84" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (1).png" width="117" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (7).png" width="197" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (2).png" width="197" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (3).png" width="80" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (5).png" width="113" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (6).png" width="117" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (11).png" width="117" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (12).svg" width="197" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (13).png" width="80" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="https://imgholder.ru/100x100/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" data-src="img/blazy/partners (14).png" width="84" height="50" alt="Логотип компании"> </li> </ul> </div> </div> </section> <section id="certificates" class="certificates"> <h2 class="visually-hidden">Сертификаты</h2> <div class="container"> <div class="certificates__wrapper"> <p class="certificates__title title--1 title">Мы ценим свою репутацию</p> <div class="slider-wrapper"> <div id="swiper-certificates" class="certificates__container swiper-container"> <div class="certificates__list swiper-wrapper"> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-1.jpg"> <img class="certificates__img b-lazy" src="https://imgholder.ru/212x300/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" width="212" height="300" data-src="img/blazy/certificates-small-1.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-2.jpg"> <img class="certificates__img b-lazy" src="https://imgholder.ru/212x300/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" width="212" height="300" data-src="img/blazy/certificates-small-2.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-3.jpg"> <img class="certificates__img b-lazy" src="https://imgholder.ru/212x300/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" width="212" height="300" data-src="img/blazy/certificates-small-3.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-4.jpg"> <img class="certificates__img b-lazy" src="https://imgholder.ru/212x300/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" width="212" height="300" data-src="img/blazy/certificates-small-4.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-5.jpg"> <img class="certificates__img b-lazy" src="https://imgholder.ru/212x300/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" width="212" height="300" data-src="img/blazy/certificates-small-5.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-6.jpg"> <img class="certificates__img b-lazy" src="https://imgholder.ru/212x300/#f6f4f4/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson" width="212" height="300" data-src="img/blazy/certificates-small-6.jpg" alt="Благодарственное письмо"> </a> </div> </div> </div> <div class="swiper-button-prev certificates__prev"> <span class="visually-hidden">Назад</span> </div> <div class="swiper-button-next certificates__next"> <span class="visually-hidden">Впред</span> </div> </div> </div> </div> </section> </main> <footer class="main-footer"> <div class="container"> <div class="main-footer__wrapper"> <p class="main-footer__adress">г. Москва, ул. Люблинская д. 165</p> <a class="main-footer__tel" href="tel:89999999999">Телефон: +7 (933) 999-99-25</a> </div> </div> </footer> <button id="btn-up" class="button-up"> <span class="visually-hidden">Кнопка наверх</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.003 300.003"> <g> <g> <path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150\n               C300.002,67.159,232.842,0,150,0z M217.685,189.794c-5.47,5.467-14.338,5.47-19.81,0l-48.26-48.27l-48.522,48.516\n               c-5.467,5.467-14.338,5.47-19.81,0c-2.731-2.739-4.098-6.321-4.098-9.905s1.367-7.166,4.103-9.897l56.292-56.297\n               c0.539-0.838,1.157-1.637,1.888-2.368c2.796-2.796,6.476-4.142,10.146-4.077c3.662-0.062,7.348,1.281,10.141,4.08\n               c0.734,0.729,1.349,1.528,1.886,2.365l56.043,56.043C223.152,175.454,223.156,184.322,217.685,189.794z"/> </g> </g> </svg> </button> </body> </html> ';t.exports=E}},e={};function a(s){if(e[s])return e[s].exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,a),i.exports}a.m=t,a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.p="",(()=>{var t={179:0},e=[[180,173]],s=()=>{};function i(){for(var s,i=0;i<e.length;i++){for(var l=e[i],c=!0,r=1;r<l.length;r++){var o=l[r];0!==t[o]&&(c=!1)}c&&(e.splice(i--,1),s=a(a.s=l[0]))}return 0===e.length&&(a.x(),a.x=()=>{}),s}a.x=()=>{a.x=()=>{},c=c.slice();for(var t=0;t<c.length;t++)l(c[t]);return(s=i)()};var l=i=>{for(var l,c,[o,n,_,d]=i,m=0,p=[];m<o.length;m++)c=o[m],a.o(t,c)&&t[c]&&p.push(t[c][0]),t[c]=0;for(l in n)a.o(n,l)&&(a.m[l]=n[l]);for(_&&_(a),r(i);p.length;)p.shift()();return d&&e.push.apply(e,d),s()},c=self.webpackChunk=self.webpackChunk||[],r=c.push.bind(c);c.push=l})(),a.x()})();