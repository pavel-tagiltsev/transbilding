'use strict';

function listToggle() {
    const button = document.querySelector(".main-nav__toggle");
    const list = document.querySelector(".main-nav__list");

    // button.classList.remove("no--js");

    window.addEventListener('resize', () => {

        if (window.matchMedia("(min-width: 1180px)").matches) {
            list.classList.remove("main-nav__list--hidden");
        }
        if (window.matchMedia("(max-width: 1180px)").matches) {
            list.classList.add("main-nav__list--hidden");
        }
    });

    if (window.matchMedia("(max-width: 1180px)").matches) {
        list.classList.add("main-nav__list--hidden");
    }

    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        list.classList.toggle("main-nav__list--hidden");
        if (button.classList.contains("main-nav__toggle--opened")) {
            button.classList.remove("main-nav__toggle--opened");
            button.classList.add("main-nav__toggle--closed");
        } else {
            button.classList.remove("main-nav__toggle--closed");
            button.classList.add("main-nav__toggle--opened");
        }
    });
}

export default listToggle;
