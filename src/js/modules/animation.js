function scrollAnimation() {
  const promoAnimItems = document.querySelectorAll('._anim-promo');
  const expertiseAnimItems = document.querySelectorAll('._anim-expertise');
  const aboutAnimItems = document.querySelectorAll('._anim-about');
  const mapAnimItems = document.querySelectorAll('._anim-map');
  const teamAnimItems = document.querySelectorAll('._anim-team');
  const buildingAnimItems = document.querySelectorAll('._anim-building');
  const designAnimItems = document.querySelectorAll('._anim-design');
  const projectAnimItems = document.querySelectorAll('._anim-project');
  const competenceAnimItems = document.querySelectorAll('._anim-competence');

  // Test
  const texts = document.querySelectorAll('.projects__link');
  var i = 0;

  if (document.documentElement.clientWidth > 767) {
    document.addEventListener('aos:in', ({
      detail
    }) => {

      if (detail.getAttribute('data-aos') == 'trigger') {
        console.log('something');
        detail.setAttribute('data-aos', 'trigger-done');
        texts[0].classList.add('projects__link--active');

        setInterval(function () {
          texts[i].classList.add('projects__link--active');
          i++;

          setTimeout(() => {
            texts[i - 1].classList.remove('projects__link--active');
          }, 2700);


          if (i >= texts.length) {
            setTimeout(() => {
              i = 0;
            }, 2850);
          }
        }, 3000);
      }
    });
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

  function hideItem({
    items,
    opacity = 0,
    transform
  }) {
    items.forEach(item => {
      item.style.opacity = `${opacity}`;
      item.style.transform = `${transform}`;
    });
  }

  function setDefaultParms(item) {
    item.style.opacity = `1`;
    item.style.transform = `translate(0, 0)`;
  }

  // Promo
  hideItem({
    items: promoAnimItems,
    transform: 'translate(0, 120%)'
  });


  function promoSectionAnimate(item, i) {
    setDefaultParms(item);
    item.style.transition = `all 1s ease ${addZero(i * 5)}s`;
  }

  // Expertise
  hideItem({
    items: expertiseAnimItems,
    transform: 'translate(0, 25%)'
  });

  function expertiseSectionAnimate(item, i) {
    if (document.documentElement.clientWidth > 1300) {
      setDefaultParms(item);
      item.style.transition = `all 1s ease ${addZero(i*3)}s`;
      return;
    }

    if (document.documentElement.clientWidth > 660) {
      setDefaultParms(item);
      if (i <= 2) {
        item.style.transition = `all 1s ease ${addZero(i*3)}s`;
      } else {
        item.style.transition = `all 1s ease ${addZero((i - 3) * 3)}s`;
      }
      return;
    }

    if (document.documentElement.clientWidth > 420) {
      setDefaultParms(item);
      if (i <= 1) {
        item.style.transition = `all 1s ease ${addZero(i*3)}s`;
      } else if (i > 1 && i <= 3) {
        item.style.transition = `all 1s ease ${addZero((i - 2) * 3)}s`;
      } else {
        item.style.transition = `all 1s ease ${addZero((i - 4) * 3)}s`;
      }
      return;
    }

    if (document.documentElement.clientWidth >= 1) {
      setDefaultParms(item);
      item.style.transition = `all 1s ease 0s`;
      return;
    }
  }

  // About
  hideItem({
    items: aboutAnimItems,
    transform: 'translate(0, 50%)'
  });

  function aboutSectionAnimate(item, i) {
    setDefaultParms(item);
    item.style.transition = `all 1s ease ${addZero(i * 5)}s`;
  }

  // Map
  hideItem({
    items: mapAnimItems,
    transform: 'translate(0, -300%)'
  });

  function mapSectionAnimate(item, i) {
    setDefaultParms(item);
    item.style.transition = `all 1s ease ${addZero(i)}s`;
  }

  // Team
  hideItem({
    items: teamAnimItems,
    transform: 'translate(0, 40%)'
  });

  function teamSectionAnimate(item, i) {
    if (document.documentElement.clientWidth >= 1300) {
      setDefaultParms(item);
      item.style.transition = `all 1s ease ${addZero(i*3)}s`;
      return;
    }

    if (document.documentElement.clientWidth >= 767) {
      setDefaultParms(item);
      if (i < 2) {
        item.style.transition = `all 1s ease ${addZero(i*3)}s`;
      } else {
        item.style.transition = `all 1s ease ${addZero((i - 2) * 3)}s`;
      }
      return;
    }

    if (document.documentElement.clientWidth >= 1) {
      setDefaultParms(item);
      item.style.transition = `all 1s ease 0s`;
      return;
    }
  }

  // Building
  hideItem({
    items: buildingAnimItems,
    transform: 'translate(-500px, 0)'
  });


  function buildingSectionAnimate(item, i) {
    setDefaultParms(item);
    item.style.transition = `all 1s ease ${addZero(i)}s`;
  }

  // Design
  hideItem({
    items: designAnimItems,
    transform: 'translate(500px, 0)'
  });

  function designSectionAnimate(item, i) {
    if (document.documentElement.clientWidth > 1000) {
      setDefaultParms(item);
      item.style.transition = `all 1s ease 1s`;
    } else {
      setDefaultParms(item);
      item.style.transition = `all 1s ease 0s`;
    }
  }

  // Projects
  // projectAnimItems.forEach((item, i) => {
  //   item.style.opacity = `0`;

  //   if (i == 0 || i == 1 || i == 4 || i == 5) {
  //     item.style.transform = `translate(-500px, 0`;
  //     return;
  //   }

  //   if (i == 2 || i == 3 || i == 6 || i == 7) {
  //     item.style.transform = `translate(500px, 0`;
  //     return;
  //   }
  // });

  // Competence
  // hideItem({
  //   items: competenceAnimItems,
  //   transform: 'scale(0)'
  // });

  function competenceSectionAnimate(item, i) {
    if (document.documentElement.clientWidth >= 1239) {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';

      if (i < 3) {
        item.style.transition = `all 1s ease ${addZero(i * 2)}s`;
      } else {
        item.style.transition = `all 1s ease ${addZero((i - 2) * 2)}s`;
      }
      return;
    }

    if (document.documentElement.clientWidth > 839) {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';

      if (i < 2) {
        item.style.transition = `all 1s ease ${addZero(i * 2)}s`;
      } else if (i < 4) {
        item.style.transition = `all 1s ease ${addZero((i - 2) * 2)}s`;
      } else {
        item.style.transition = `all 1s ease 0s`;
      }
      return;
    }

    if (document.documentElement.clientWidth < 839) {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
      item.style.transition = `all 1s ease 0s`;
      return;
    }
  }

  function projectsSectionAnimate(item, i) {
    setDefaultParms(item);
    item.style.transition = `all 1.5s ease 0s`;
  }

  function triggerAnimation(animItems, animStart, animation) {
    const offset = function (el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    animItems.forEach((item, i) => {
      const animItemHeight = item.offsetHeight;
      const animItemOffset = offset(item).top;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.pageYOffset > animItemOffset - animItemPoint) &&
        window.pageYOffset < (animItemOffset + animItemPoint)) {
        animation(item, i);
      }
    });
  }

  function animOnScroll() {
    triggerAnimation(promoAnimItems, 4, promoSectionAnimate);
    triggerAnimation(expertiseAnimItems, 4, expertiseSectionAnimate);
    triggerAnimation(aboutAnimItems, -4, aboutSectionAnimate);
    triggerAnimation(teamAnimItems, 4, teamSectionAnimate);
    triggerAnimation(mapAnimItems, 4, mapSectionAnimate);
    triggerAnimation(buildingAnimItems, 4, buildingSectionAnimate);
    triggerAnimation(designAnimItems, 4, designSectionAnimate);
    // triggerAnimation(projectAnimItems, 4, projectsSectionAnimate);
    // triggerAnimation(competenceAnimItems, 4, competenceSectionAnimate);
  }

  window.addEventListener('scroll', animOnScroll);
  animOnScroll();
}

export default scrollAnimation;
