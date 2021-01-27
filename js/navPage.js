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