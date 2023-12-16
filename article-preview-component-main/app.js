const shareIcon = document.querySelector('.share');
const shareActive = document.querySelector('.shareActive');
const shareInActive = document.querySelector('.shareInActive');
const profileBackground = document.querySelector('.profileInformation');

shareIcon.addEventListener('click', () => {
    if(shareActive.style.display !== 'flex'){
        shareInActive.style.display = 'none';
        shareActive.style.display = 'flex';
        profileBackground.style.backgroundColor = 'var(--Very-Dark-Grayish-Blue)';
        shareIcon.src = 'images/icon-share-active.svg';
        shareIcon.style.backgroundColor = 'var(--Desaturated-Dark-Blue)'
    } else {
        shareInActive.style.display = 'flex';
        shareActive.style.display = 'none';
        profileBackground.style.backgroundColor = 'transparent';
        shareIcon.src = 'images/icon-share.svg';
        shareIcon.style.backgroundColor = 'initial';
    }
});