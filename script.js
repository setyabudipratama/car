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