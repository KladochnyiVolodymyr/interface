import menuFunction from './lib/responsive_menu.js';
import 'lightslider';

document.getElementById('responsive-menu').addEventListener('click', menuFunction);


$('.twitter__slider').lightSlider({
  item: 1,
  pager: false,
  loop: true,
  prevHtml:'<div class="slider__arrow"><img class="arrow__icon" src="././icons/prev.svg"></div>',
  nextHtml:'<div class="slider__arrow"><img class="arrow__icon" src="././icons/next.svg"></div>'
});


