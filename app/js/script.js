const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

const about = document.querySelector('#about-mobile');
const contact = document.querySelector('#contact-mobile');

btnHamburger.addEventListener('click', function(){

    if (header.classList.contains('open')) {    //close hamburger
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else { // open hamburger
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    } 
});

//This closes the menu when clicking a nav link that leads to the same page

about.addEventListener('click', function(){
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
});

contact.addEventListener('click', function(){
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
});