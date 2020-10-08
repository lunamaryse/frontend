// JavaScript Document
const span = document.querySelector('span');
const btn = document.querySelector('.click');
const hamburgerUl = document.querySelector('.hamburgerul');

// Hamburgermenu
btn.addEventListener('click', function () {
    console.log('test');
    hamburgerUl.classList.toggle('animator');
    span.classList.toggle('active');
}, false);
