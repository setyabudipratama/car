// fungsi responsif navbar
const bars = document.querySelector('header nav .fa-bars-staggered');
bars.addEventListener('click', function () {
    this.classList.toggle('fa-x');
    const navbar = document.querySelector('header nav ul');
    navbar.classList.toggle('active');
});

// suspension
const suspensionNav = document.querySelector('header nav ul li:first-child');
const btnHeader = document.querySelector('header .content .left button');
[suspensionNav, btnHeader].forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        const suspension = document.getElementById('suspension');
        suspension.scrollIntoView({ behavior: 'smooth' });
    });
});

const homeNav = document.querySelector('header nav ul li:nth-child(3)');
homeNav.addEventListener('click', function (e) {
    e.preventDefault();
    const home = document.querySelector('header');
    home.scrollIntoView({ behavior: 'smooth' });
});

const homeNav2 = document.querySelector('header nav .logo');
homeNav2.addEventListener('click', function (e) {
    e.preventDefault();
    const home = document.querySelector('header');
    home.scrollIntoView({ behavior: 'smooth' });
});

const engineNav = document.querySelector('header nav ul li:nth-child(2)');
engineNav.addEventListener('click', function (e) {
    e.preventDefault();
    const engine = document.getElementById('engine');
    engine.scrollIntoView({ behavior: 'smooth' });
});

const brakeNav = document.querySelector('header nav ul li:nth-child(4)');
brakeNav.addEventListener('click', function (e) {
    e.preventDefault();
    const brake = document.getElementById('brake');
    brake.scrollIntoView({ behavior: 'smooth' });
});

const motorsportNav = document.querySelector('header nav ul li:nth-child(5)');
motorsportNav.addEventListener('click', function (e) {
    e.preventDefault();
    const motorsport = document.getElementById('motorsport');
    motorsport.scrollIntoView({ behavior: 'smooth' });
});


// function activatePageElement() {
//     const activeSection = document.querySelectorAll('section[id]');

//     const sectionId = activeSection.id;
    
//     const elements = {
//         suspension: {
//             h2: document.querySelector('#suspension .container h2'),
//             p: document.querySelector('#suspension .container .content .desc p'),
//             img: document.querySelector('#suspension .container .content .image img')
//         },
//         engine: {
//             h2: document.querySelector('#engine .container h2'),
//             p: document.querySelector('#engine .container .content .desc p'),
//             img: document.querySelector('#engine .container .content .image img')
//         },
//         brake: {
//             h2: document.querySelector('#brake .container h2'),
//             p: document.querySelector('#brake .container .content .desc p'),
//             img: document.querySelector('#brake .container .content .image img')
//         }
//     }

//     const activatePageElements = document.querySelectorAll('.active');
//     activatePageElements.forEach(element => element.classList.remove('active'));

//     if (elements[sectionId]) {
//         const { h2, p, img } = elements[sectionId];
//         h2?.classList.add('active');
//         p?.classList.add('active');
//         img?.classList.add('active');
//     }
// }

// document.addEventListener('DOMContentLoaded', activatePageElement);

// window.addEventListener('scroll', function() {
//     activatePageElement();
// });