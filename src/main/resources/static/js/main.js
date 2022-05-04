// import { gsap } from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  // -----------------click_on_btn------------------
  let form = document.querySelector('.contacts__form-block');
  form.addEventListener('submit', el=>{
    // el.preventDefault();
  });


  // -------------------scroll---------------------

  $('[data-scroll]').on("click", function (e) {
      e.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      $("html,body").animate({
        scrollTop: elementOffset - 20
      }, 1000);
  });




  // -------------------clicker---------------------
  const clicker = document.querySelectorAll('.clicker'),
        clickerIcon = document.querySelectorAll('.clicker-icon'),     
        display = document.querySelector('.display_black'),
        container = document.querySelector('.container'),
        link = document.querySelectorAll('*'),
        border = document.querySelectorAll('.left, .right, .top-menu-fixed'),
        btn = document.querySelector('.btn'),
        logo = document.querySelectorAll('.logo img');


  const white = () => {
    display.classList.add('display_white');
    display.classList.remove('display_black');
    clickerIcon.forEach(el=>{
      el.classList.add('sun');
      el.classList.remove('moon');
    });
    container.style.color = `var(--black-color)`;
    btn.style.borderColor = `var(--black-color)`;
    clicker.forEach(el=>{
      el.style.backgroundColor = `var(--black-color)`;
    });
    logo.forEach(el=>{
      el.src = "/logo_w_bg.png";
    });
    link.forEach(el => {
      el.style.color = `var(--black-color)`;
      el.style.opacity = '1';
      el.style.fontWeight = "300";
    });
    border.forEach(el=>{
      el.style.borderColor = `var(--black-color)`;
    });
  }


  const black = () => {
    display.classList.add('display_black');
    display.classList.remove('display_white');
    clickerIcon.forEach(el=>{
      el.classList.add('moon');
      el.classList.remove('sun');
    });
    container.style.color = '';
    btn.style.borderColor = '';
    clicker.forEach(el=>{
      el.style.backgroundColor = ``;
    });
    logo.forEach(el=>{
      el.src = "../logo.png";
    });
    link.forEach(el => {
      el.style.color = '';
      el.style.opacity = '';
      el.style.fontWeight = "";
    });
    border.forEach(el=>{
      el.style.borderColor = ``;
    });
  }


  clicker.forEach(el=>{
    el.addEventListener('click', ()=>{
      if(display.classList == 'display_black'){
        white();
      } else{
        black();
      }
    })
  })
  




  // -------------------cursor---------------------
  let cursor = document.querySelector('.cursor');
  let item = document.querySelectorAll('a, input, .comment, .about-list-item__name, .clicker, .work-list__test');

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

