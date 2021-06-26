'use strict';

function pageNavigate() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', (evt) => {
            evt.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

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

export default pageNavigate;