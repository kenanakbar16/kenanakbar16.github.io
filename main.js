let bar = document.querySelector('.baria');
let nav = document.querySelector('.nav-list');

bar.onclick = () => {
    bar.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

