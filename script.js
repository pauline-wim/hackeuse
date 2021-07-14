// LOADER

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.classList.add('fondu-out');
})

// fin - LOADER

// ANIMATION TITRE 

const titreSpans = document.querySelectorAll('h1 .seconde');
const titreSpansFirst = document.querySelectorAll('h1 .first');
// const btns = document.querySelectorAll('.btn-first');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const logo = document.querySelector('.logo');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL.staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: 'power2.out'}, 0.3);
    TL.staggerFrom(titreSpansFirst, 1, {top: -50, opacity: 0, ease: 'power2.out'}, 0.3, '-=1');
    // TL.staggerFrom(btns , 1, {opacity: 0, ease: 'power2.out'}, 0.3, '-=1');
    TL.from(l1, 1, {width: 0, ease: 'power2.out'}, '-=2');
    TL.from(l2, 1, {width: 0, ease: 'power2.out'}, '-=2');
    TL.from(logo, 0.4, {transform: 'scale(0)', ease: 'power2.out'}, '-=2');
    // TL.staggerFrom(btns , 1, {right: -200, ease: 'power2.out'}, 0.3, '-=1');

    TL.play();

})

//  MENU RESPONSIVE
function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
      menu.className = "open";
      icon.className = "open";
      root.style.overflowY = "hidden";
    } else {
      menu.className = "";                    
      icon.className = "";
      root.style.overflowY = "";
    }
  }

// MODAL - PopUp window

// let modal = null

// const openModal = function (e) {
//     e.preventDefault()
//     const targer = document.querySelector(e.target.getAttribute('href'))
//     target.style.display = null
//     target.removeAttribute('aria-hidden')
//     // target.setAttribute('aria-modal', 'true')
//     modal = target
//     modal.addEventListener('click', closeModal)
// }

// const closeModal = function (e) {
//   if (modal === null) return
//     e.preventDefault()
//     modal.style.display = "none"
//     modal.setAttribute('aria-hidden', 'true')
//     // modal.removeAttribute('aria-modal')
//     modal.removeEventListener('click', closeModal)
//     modal = null;
// }

//   document.querySelectorAll('.js-modal').forEach(a => {
//     a.addEventListener('click', openModal)
//   })

var btnPopup = document.getElementById('btnPopup');
var modal = document.getElementById('modal');
var window = document.getElementById('window');

btnPopup.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);
window.removeEventListener('click', closeModal);

function openModal(){
  modal.style.display = 'flex';
}

function closeModal(){
  modal.style.display = 'none';
}


