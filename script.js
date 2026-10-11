'use strict';

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.menu a');

burger.addEventListener('click', () => {
  navbar.classList.toggle('open');
})

for (let link of navLinks) {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  })
}