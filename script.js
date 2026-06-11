let hamburgerButton = document.getElementById("hamburger");
let mainNav = document.getElementById('main-nav');
let styleRules = document.styleSheets[0].cssRules;
let navigationElement = document.querySelector('.navigation');
let isDesktop = window.matchMedia("(min-width: 768px)");
let isdark=0;

hamburgerButton.addEventListener('click', function() {
  hamburgerButton.classList.toggle('closed');
  if (hamburgerButton.classList.contains('closed')) {
    navigationElement.style.opacity = '0';
    navigationElement.style.transform = 'scale(0)';
} else {
    navigationElement.style.opacity = '1';
    navigationElement.style.transform = 'scale(1)';
}
})

function themeSwitch() {
  if(isdark==0){
    styleRules[0].style.setProperty('--bodyColor', '#0f191d');
    styleRules[0].style.setProperty('--textColor', 'white');
    styleRules[0].style.setProperty('--cardColor', '#090909');
    isdark=1;
  } else {
    styleRules[0].style.setProperty('--bodyColor', '#cecece');
    styleRules[0].style.setProperty('--textColor', 'black');
    styleRules[0].style.setProperty('--cardColor', 'white');
    isdark=0;
  }
}

mainNav.addEventListener('click', () => {
  if (!isDesktop.matches) {
  hamburgerButton.classList.add('closed');
  navigationElement.style.opacity = '0';
    navigationElement.style.transform = 'scale(0)';
}
})