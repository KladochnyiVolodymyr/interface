// import 'slick-carousel';
import menuFunction from './lib/responsive_menu.js';

document.getElementById('responsive-menu').addEventListener('click', menuFunction);
 
// $('.twitter__slider').slick({respondTo:'min'});

import 'lightslider';

$('#light-slider').lightSlider({
  item: 1,
  loop:true
});
