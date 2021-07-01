'use strict';

function buttonUp() {
  let btn = document.querySelector("#btn-up");

    btn.addEventListener('click', (evt) => {
        evt.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    function showUpButton() {
        if ((window.pageYOffset + document.documentElement.clientHeight) + 1000 >=
            document.documentElement.scrollHeight) {
            btn.classList.add("fixed");
        } else {
            btn.classList.remove("fixed");
        }
    }

    window.addEventListener('scroll', showUpButton);
}

export default buttonUp;
