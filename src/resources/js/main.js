// import { gsap } from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
  'use strict'


  // -------------------scroll---------------------

  $('[data-scroll]').on("click", function (e) {
      e.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      // console.log(elementOffset);

      $("html,body").animate({
        scrollTop: elementOffset - 20
      }, 1000);
  });




  // -------------------clicker---------------------
  const clisker = document.querySelector('.clicker'),
        clickerIcon = document.querySelector('.clicker-icon'),
        display = document.querySelector('.display_black'),
        container = document.querySelector('.container'),
        link = document.querySelectorAll('*'),
        left = document.querySelectorAll('.left'),
        right = document.querySelectorAll('.right'),
        btn = document.querySelector('.btn'),
        clicker = document.querySelector('.clicker'),

        logo = document.querySelector('.logo img');
        // console.dir(logo);


  const white = () => {
    display.classList.add('display_white');
    display.classList.remove('display_black');
    clickerIcon.classList.add('sun');
    clickerIcon.classList.remove('moon');
    container.style.color = `var(--black-color)`;
    btn.style.borderColor = `var(--black-color)`;
    clicker.style.backgroundColor = `var(--black-color)`;
    logo.src = "./static/logo_w_bg.png";
    link.forEach(el => {
      el.style.color = `var(--black-color)`;
      el.style.opacity = '1';
      el.style.fontWeight = "300";
    });
    left.forEach(el => {
      el.style.borderColor = `var(--black-color)`;
    });
    right.forEach(el => {
      el.style.borderColor = `var(--black-color)`;
    });
  }
  const black = () => {
    display.classList.add('display_black');
    display.classList.remove('display_white');
    clickerIcon.classList.add('moon');
    clickerIcon.classList.remove('sun');
    container.style.color = '';
    btn.style.borderColor = '';
    clicker.style.backgroundColor = '';
    logo.src = "./static/logo.png";
    link.forEach(el => {
      el.style.color = '';
      el.style.opacity = '';
      el.style.fontWeight = "";
    });
    left.forEach(el => {
      el.style.borderColor = '';
    });
    right.forEach(el => {
      el.style.borderColor = '';
    });
  }


  clisker.addEventListener('click', ()=>{
    console.dir(display);

    if(display.classList == 'display_black'){
      white();
    } else{
      black();
    }
  })




  // -------------------cursor---------------------
  let cursor = document.querySelector('.cursor');
  let item = document.querySelectorAll('a, input, .comment, .about-list-item__name, .clicker');

  window.addEventListener('mousemove', cur);
  function cur(el){
    cursor.style.top = el.pageY + 'px';
    cursor.style.left = el.pageX + 'px';
  }

  item.forEach(link=>{
    link.addEventListener('mouseleave', ()=>{
      cursor.classList.remove('link_group');
      link.classList.remove('hov_group');
    });
    link.addEventListener('mouseover', ()=>{
      cursor.classList.add('link_group');
      link.classList.add('hov_group');
    });
  })


})

