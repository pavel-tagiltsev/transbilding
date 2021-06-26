function scrollAnimation() {
  const animItems = document.querySelectorAll('._anim-items');
  const animSections = document.querySelector('._anim-section');
  const animExpertises = document.querySelectorAll('._anim-expertise');
  const animPromos = document.querySelectorAll('._anim-promo');

  function clearStyle(item) {
    setTimeout(() => {
      item.style = ``;
    }, 3000);
  }

  function addZero(number) {
    if (number < 10) {
      return `0.${number}`;
    }

    if (number >= 10) {
      return number / 10;
    }

    return number;
  }

  // Promo
  function promoSectionAnimate() {
    animPromos.forEach(item => {
      item.style = `opacity: 0;
        transform: translate(0, 120%);`;
    });

    setTimeout(() => {
      animPromos.forEach((item, i) => {
        item.style = `opacity: 1;
          transform: translate(0, 0);
          transition: all 1s ease ${addZero(i * 5)}s;`;
        clearStyle(item);
      });
    });
  }

  promoSectionAnimate();

  // Expertise
  animExpertises.forEach(item => {
    item.style = `opacity: 0;
    transform: translate(0, 25%);
    transition: all 0s ease 0s;`;
  });

  function ExpertiseAnimationBreakpoints(item, i) {
    if (document.documentElement.clientWidth >= 1180) {
      item.style = `opacity: 1;
      transform: translate(0, 0);
      transition: all 1s ease ${addZero(i*3)}s;`;
      clearStyle(item);
      return;
    }

    if (document.documentElement.clientWidth > 660) {
      if (i <= 2) {
        item.style = `opacity: 1;
        transform: translate(0, 0);
        transition: all 1s ease ${addZero(i*3)}s;`;
        clearStyle(item);
      } else {
        item.style = `opacity: 1;
        transform: translate(0, 0);
        transition: all 1s ease ${addZero((i - 3) * 3)}s;`;
        clearStyle(item);
      }
      return;
    }

    if (document.documentElement.clientWidth > 420) {
      if (i <= 1) {
        item.style = `opacity: 1;
        transform: translate(0, 0);
        transition: all 1s ease ${addZero(i*3)}s;`;
        clearStyle(item);
      } else if (i > 1 && i <= 3) {
        item.style = `opacity: 1;
        transform: translate(0, 0);
        transition: all 1s ease ${addZero((i - 2) * 3)}s;`;
        clearStyle(item);
      } else {
        item.style = `opacity: 1;
        transform: translate(0, 0);
        transition: all 1s ease ${addZero((i - 4) * 3)}s;`;
        clearStyle(item);
      }
      return;
    }

    if (document.documentElement.clientWidth >= 320) {
      item.style = `opacity: 1;
      transform: translate(0, 0);
      transition: all 1s ease 0s;`;
      clearStyle(item);
      return;
    }
  }

  const offset = function (el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  function triggerActivePointByScroll(animItems, animStart, functionAnim) {
    animItems.forEach((item, i) => {
      const animItemHeight = item.offsetHeight;
      const animItemOffset = offset(item).top;


      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.pageYOffset > animItemOffset - animItemPoint) &&
        window.pageYOffset < (animItemOffset + animItemPoint)) {
        functionAnim(item, i);
      }
    });
  }

  // if (animItems.length > 0) {

  const animOnScroll = function () {

    triggerActivePointByScroll(animExpertises, 4, ExpertiseAnimationBreakpoints);

    for (let index = 0; index < animItems.length; index++) {

      const animItem = animItems[index];
      // const animSection = animSections[index];
      const animExpertise = animExpertises[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;



      // if (animItem.classList.contains('_active')) {
      //   setTimeout( ()=> {
      //     animItem.style.transition ="all 0s ease 0s";

      //   }, 1000);
      // }

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

export default scrollAnimation;
