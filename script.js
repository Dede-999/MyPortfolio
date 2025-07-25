/* identifico alcuni elementi nel DOM: il pulsante hamburger, 
la navigazioe e le regole CSS. */
let hamburgerButton = document.getElementById("hamburger");
let mainNav = document.getElementById('main-nav');
let styleRules = document.styleSheets[0].cssRules;
let navigationElement = document.querySelector('.navigation');
// let navigation;

/* cerco la classe navigation tra le regole CSS */
// for (const [key, value] of Object.entries(styleRules)) {
//   if (value.selectorText == '.navigation') {
//     navigation = styleRules[key];
//   }
// }

/* Al click sul pulsante hamburger, aggiungo o tolgo classi ed effetti
per creare la transizione del menu */
hamburgerButton.addEventListener('click', function() {
  hamburgerButton.classList.toggle('closed');
  // if (hamburgerButton.classList.contains('closed')) {
  //   navigation.style.setProperty('opacity', 0);
  //   navigation.style.setProperty('transform', 'scale(0)');
  // } else {
  //   navigation.style.setProperty('opacity', 1);
  //   navigation.style.setProperty('transform', 'scale(1)');
  // }
  if (hamburgerButton.classList.contains('closed')) {
    navigationElement.style.opacity = '0';
    navigationElement.style.transform = 'scale(0)';
} else {
    navigationElement.style.opacity = '1';
    navigationElement.style.transform = 'scale(1)';
}
})

/* Al click sul menu di navigazione, mi assicuro di chiuderlo */
mainNav.addEventListener('click', () => {
  hamburgerButton.classList.add('closed');
  navigationElement.style.opacity = '0';
    navigationElement.style.transform = 'scale(0)';
})