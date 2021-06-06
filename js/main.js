"use strict";

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    
    const animOnScroll = function()  {
        
        const offset = function(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        };

        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight  = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            
            if ((window.pageYOffset > animItemOffset - animItemPoint) &&  
            window.pageYOffset < (animItemOffset + animItemPoint)) {
                console.log(animItemPoint);
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
        
    };
    
    window.addEventListener('scroll', animOnScroll);
    animOnScroll();
    
}