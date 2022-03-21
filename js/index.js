const btnMenu = document.querySelector('#btn-menu');
const btnClose = document.querySelector('#btn-close');
const navLinks = document.querySelector('.links');
const byName = document.querySelector('.byName');

byName.innerHTML = `Luis Jesus Villegas Castillo ${ new Date().getFullYear() }`;

btnMenu.addEventListener('click', ()=>{
  navLinks.classList.add('show');
  window.onscroll = function(){
    window.scrollTo(0,0);
  }
});

btnClose.addEventListener('click', ()=>{
  navLinks.classList.remove('show');
});