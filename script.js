let hamburgerButton = document.getElementById("hamburger");
let mainNav = document.getElementById('main-nav');
let styleRules = document.styleSheets[0].cssRules;
let navigationElement = document.querySelector('.navigation');

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

mainNav.addEventListener('click', () => {
  hamburgerButton.classList.add('closed');
  navigationElement.style.opacity = '0';
    navigationElement.style.transform = 'scale(0)';
})