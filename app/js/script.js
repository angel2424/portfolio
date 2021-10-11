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

//////////// GSAP ANIMATIONS ////////////

        //// HOME PAGE ////

/////////   Intro section animations

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('#logo', {opacity: 0, duration: .5, delay: 3})
tl.from('.intro', {y: '0%', duration: 1.5,}, '-=.5')


/////////   Hero section animations

tl.from('.main-nav li, .logo, .nav-socials', {opacity: 0, duration: 2.5}, '-=1');
tl.from('.hide_title', {opacity: 0, duration: 2.5}, '-=3.5');
tl.from('.hero .btn', {opacity: 0, duration: 1.5}, '-=3.5');


/////////   Work section animations

let stTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.work',
        start: 'center bottom'
    }
});

if (window.innerWidth < 700) {
   stTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.work',
            start: 'top center'
        }
    });
}

stTl.from('.work_h2', {y: 300, opacity: 0, duration: 1.5});
stTl.from('.img-container', {x: '-100%', opacity: 0, duration: 1, stagger: 0.25}, '-=1')
stTl.from('.work .button', {opacity: 0, duration: 1.5}, '-=1');

////////   About Section Animation 

let stAbout = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'center bottom'
    }
});

if (window.innerWidth < 700) {
    stAbout = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top center'
        }
    });
}

stAbout.from('.title_text', {opacity: 0, duration: 1});
stAbout.from('.about img', {opacity: 0, duration: 1}, '-=1');
stAbout.to('.ab_title_hide', {x: 0, duration: 1.5}, '-=1');
stAbout.from('.about p', {opacity: 0, duration: 1}, '-=1');

////////   Skills Section Animation 

let stSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        start: 'center bottom'
    }
});

if (window.innerWidth < 700) {
   stSkills = gsap.timeline({
        scrollTrigger: {
            trigger: '.skills',
            start: 'top center'
        }
    });
}

stSkills.from('.skills h1', {y: 300, opacity: 0, duration: 1});
stSkills.from('.skills__list div', {opacity: 0, duration: 1.5, stagger: .25}, '-=1')

////////   Contact Section Animation

let stContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'center bottom'
    }
});

stContact.from('.contact', {opacity: 0, duration: 1});

////////   Topbtn and footer Section Animation

let stFooter = gsap.timeline({
    scrollTrigger: {
        trigger: '.to_top',
        start: 'center bottom'
    }
});

stFooter.from('.to_top, footer', {opacity: 0, duration: 1})

        //// WORK PAGE ////

/////////   nav section animations
