// import 'slick-carousel';
import menuFunction from './lib/responsive_menu.js';

document.getElementById('responsive-menu').addEventListener('click', menuFunction);
 
// $('.twitter__slider').slick({respondTo:'min'});

import 'lightslider';

$('.twitter__slider').lightSlider({
  item: 1,
  pager: false,
  prevHtml:'<div class="slider__arrow slider__arrow_prev"><img class="arrow__icon" src="././icons/prev.svg"></div>',
  nextHtml:'<div class="slider__arrow slider__arrow_next"><img class="arrow__icon" src="././icons/next.svg"></div>'
});
