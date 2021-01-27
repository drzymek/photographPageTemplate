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

navAbout.addEventListener('click', scrollToAbout);