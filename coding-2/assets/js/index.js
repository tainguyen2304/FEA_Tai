const close = document.querySelector('.close');
const open = document.querySelector('.open');
const box = document.querySelector('.box-1');
const items = document.querySelectorAll('.item');
const box2open = document.querySelector('.box-2__open')
const box2close = document.querySelector('.box-2__close')
const box2body = document.querySelector('.box-2__body')
const box2list = document.querySelector('.box-2__list')
close.onclick = function () {
    box.style.height = null;
    let i = items.length - 1; 
    for ( i; i >= 0; i-- ) {
        items[i].style.display = 'none';
    }
}
open.onclick = function () {
    let i =  0 ; 
    let n = items.length;
    for ( i; i < n ; i++ ) {
        items[i].style.display = 'block';
    }
    box.style.display = 'block';
    box.style.height = box.scrollHeight + 'px';
}
box2close.onclick = function () {
    box2body.style.left = null;
    box2list.style.left = null;
}
box2open.onclick = function () {
    box2body.style.left = '200px';
    box2list.style.left = '0px';
}