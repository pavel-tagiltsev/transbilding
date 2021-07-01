function textShow() {
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
}

export default textShow;
