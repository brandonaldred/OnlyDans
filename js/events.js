const navHome = document.querySelector('.nav-home');
navHome.addEventListener('click', () => {
    window.location.href = `/`;
});

const listLink = document.querySelector('.nav-list');
listLink.addEventListener('click', () => {
    window.location.href = `/list.html`;
});