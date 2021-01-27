const moveLeft = () => {
    const frontPhoto = document.querySelector('.currentPhoto');
    const leftPhoto = document.querySelector('.leftPhoto');
    const rightPhoto = document.querySelector('.rightPhoto');
    const backPhoto = document.querySelector('.backPhoto');

    frontPhoto.classList.remove('currentPhoto');
    frontPhoto.classList.add('leftPhoto');

    leftPhoto.classList.remove('leftPhoto');
    leftPhoto.classList.add('backPhoto');

    backPhoto.classList.remove('backPhoto');
    backPhoto.classList.add('rightPhoto');

    rightPhoto.classList.remove('rightPhoto');
    rightPhoto.classList.add('currentPhoto');
}

const moveRight = () => {
    const frontPhoto = document.querySelector('.currentPhoto');
    const leftPhoto = document.querySelector('.leftPhoto');
    const rightPhoto = document.querySelector('.rightPhoto');
    const backPhoto = document.querySelector('.backPhoto');

    frontPhoto.classList.remove('currentPhoto');
    frontPhoto.classList.add('rightPhoto');

    leftPhoto.classList.remove('leftPhoto');
    leftPhoto.classList.add('currentPhoto');

    backPhoto.classList.remove('backPhoto');
    backPhoto.classList.add('leftPhoto');

    rightPhoto.classList.remove('rightPhoto');
    rightPhoto.classList.add('backPhoto');
}



const leftBtn = document.querySelector('.fa-chevron-left');
leftBtn.addEventListener('click', moveLeft);

const rightBtn = document.querySelector('.fa-chevron-right');
rightBtn.addEventListener('click', moveRight);