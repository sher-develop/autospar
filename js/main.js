//Create menu button
const menuBtn = document.querySelector('.menu');
const navBarSystem = document.querySelector('.nav-items');

menuBtn.addEventListener('click', (e)=> {
   e.preventDefault();
   console.log(navBarSystem);
    navBarSystem.classList.toggle('open');
});

//Create adaptive slider
const swiper = new Swiper('.swiper-container', {
    loop: true,

    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left'
    },

    // pagination: {
    //     el: 'swiper-pagination',
    // }
});

const swiperCustomer = new Swiper('.customer-slider', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    }
});

//Create scroll animation
const sr = new ScrollReveal({
    distance: '40px',
    duration: 1800,
    reset: true
});

sr.reveal(`.hero-title, .hero-text, .btn
           .save-form__item, choose-wrapper__imgs,
           .save-wrapper__item, .choose-link, 
           .service-item, .section-title, .cart-item, 
           .contact-form, .contact-info`, {
    origin: 'top',
    interval: 100
});

sr.reveal(`.save-item__title, .choose-title,
           .choose-btn, .service-title, .subscribe`, {
    origin: 'left',
    interval: 100
});

sr.reveal(`.save-item_text, .choose-text,
           .service-text, .sub-information__item`, {
    origin: 'right',
    interval: 100
});