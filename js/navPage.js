const navAbout = document.querySelector('.navAbout');
const navMywork = document.querySelector('.navMyWork');
const navContact = document.querySelector('.navContact');

const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about').offsetTop;
    window.scroll({
        top: aboutSection,
        behavior: "smooth",
    })
}

const scrollToMyWork = () => {
    const myWorkSection = document.querySelector('#fullSizeSlider').offsetTop;
    window.scroll({
        top: myWorkSection,
        behavior: 'smooth',
    })
}

const scrollToContact = () => {
    const contactSection = document.querySelector('#contact').offsetTop;
    window.scroll({
        top: contactSection,
        behavior: 'smooth',
    })
}

navAbout.addEventListener('click', scrollToAbout);
navMywork.addEventListener('click', scrollToMyWork);
navContact.addEventListener('click', scrollToContact);


/* mobile nav -------------------------*/
const barsBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times');
const mobileMenu = document.querySelector('#mobileMenu')
const mobileAbout = document.querySelector('.mobileNavAbout');
const mobileMyWork = document.querySelector('.mobileNavMyWork');
const mobileContact = document.querySelector('.mobileNavContact');

const handleMenuBtn = () => {
    closeBtn.classList.toggle('on');
    barsBtn.classList.toggle('on');
    mobileMenu.classList.toggle('off');
}

closeBtn.addEventListener('click', handleMenuBtn);
barsBtn.addEventListener('click', handleMenuBtn);

mobileAbout.addEventListener('click', scrollToAbout);
mobileMyWork.addEventListener('click', scrollToMyWork);
mobileContact.addEventListener('click', scrollToContact);