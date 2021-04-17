const menu = document.querySelector('.menu-toggler');
const menuItems = document.querySelectorAll('.stagger-item');
menu.onclick = function () {
    for (let item of menuItems) {
        item.classList.toggle('translate-start');
    }
}
const heightAnimation = document.querySelector('.height-transition');
heightAnimation.onmouseover = function () {
    if (this.style.height) {
        this.style.height = null;
    }
    else {
        this.style.height = this.scrollHeight + 'px';
    }
}
