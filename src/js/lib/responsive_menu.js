function menuFunction() {
  var menu = document.getElementById('menu');
  
  if (menu.className === 'menu') {
    menu.className += ' responsive';
  } else {
    menu.className = 'menu';
  }
  var btn = document.getElementById('responsive-menu');
  btn.classList.toggle('open');
}

module.exports = menuFunction;
  
