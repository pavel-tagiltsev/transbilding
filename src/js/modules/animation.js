function scrollAnimation() {
    const animItems = document.querySelectorAll('._anim-items');


    if (animItems.length > 0) {

        const animOnScroll = function () {

            const offset = function (el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {
                    top: rect.top + scrollTop,
                    left: rect.left + scrollLeft
                };
            };

            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

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

         // Fixed a bag with buttons
        for (let i = 0; i < animItems.length; i++) {
            if (animItems[i].getAttribute('href') == '#partners' &&
                animItems[i].getAttribute('href') == '#certificates') {
                animItems[i].style.transition = '300ms';
            }
        }
    }
}

export default scrollAnimation;
