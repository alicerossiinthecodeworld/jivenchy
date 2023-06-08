export const menu = document.querySelector('.menu');
export const menuIcon = document.querySelector('.header__menu-pic');


const galleryItems = document.querySelectorAll('.looks__gallery-item img');
export const images = Array.from(galleryItems).map(item => item.src);

console.log(images);