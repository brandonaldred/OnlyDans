function extractId(iCalContent) {
    var rx = /(?<=\?).*/g;
    var arr = rx.exec(iCalContent);
    return arr[0]; 
  }

const userId = extractId(window.location.href);
console.log(userId);

const navHome = document.querySelector('.nav-home');
navHome.addEventListener('click', () => {
    window.location.href = '/index.html';
});