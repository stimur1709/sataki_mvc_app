window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    //Анимация элементов

    const tl = new TimelineMax()

        tl.from('.information', 1, {
            x: '100%'
        })

        tl.from('.left-menu-fixed', .6, {
            x: -50,
            opacity: 0
        })

        tl.from('.right', .5, {
            x: 100,
            opacity: 0
        } )

        tl.from('.heading', .35, {
            y: -100,
            opacity: 0
        })

        tl.from('.services__dev', .5, {
            x: 100,
            opacity:0
        })

        tl.from('.services__design', .45, {
            x: -100,
            opacity:0
        })

        tl.from('.services__help', .40, {
            y: 100,
            opacity:0
        })

        tl.duration(3)


        // Проверка формы

        const form = document.querySelector('#form'),
          name = form.querySelector('#formName'),
          surName = form.querySelector('#formSurname'),
          email = form.querySelector('#formEmail'),
          tel = form.querySelector('#tel'),
          passConf = form.querySelector('#formPass-conf'),
          dateBirth = form.querySelector('#formDB'),
          request = form.querySelectorAll('.req'),
          checkbox = form.querySelector('.checkbox__input'),
          btn = form.querySelector('.form__btn');

    const NameReg = /^[A-Za-zА-Яа-я]{2,30}$|(^$)/,
          MailReg =  /[A-Za-z0-9-_]{1,}@[A-Za-z0-9-_]{1,}\.[a-z]{2,4}|(^$)/,
          TelReg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\-_ ]{7,10}$/;



// Фун-ия ошибки
          const generateError = function (text) {
            const error = document.createElement('div');
            error.className = 'error';
            error.style.color = '#8aee32';
            error.style.marginBottom = '10px';
            error.innerHTML = text;
            return error;
          };

// Удаляем сообщение об ошибке чтобы не двоилось
          const removeVal = function () {
            const errors = form.querySelectorAll('.error');
            for (let i = 0; i < errors.length; i++) {
                errors[i].remove();
            }
          };

// Проверям все поля на пустую строку
          const checkFields = function () {
            for (let i = 0; i < request.length; i++) {
                if (!request[i].value) {
                    const error = generateError('Заполните поле');
                    form[i].parentElement.insertBefore(error, request[i]);
                    setTimeout(() => {
                      error.remove();
                    },4000);
                }
            }
          };


// Проверка Email
          const checkEmailValid = function () {
            if (!validate(MailReg, email.value)) {
              const error = generateError('Некорректный адрес электронной почты');
              email.parentElement.insertBefore(error, email);
              setTimeout(() => {
                error.remove();
              },4000);
            }
            function validate(reg, inp) {
              return reg.test(inp);
            }
          };


          const checkTelValid = function () {
            if (!validate(TelReg, tel.value)) {
              const error = generateError('Некорректно введен телефон');
              tel.parentElement.insertBefore(error, tel);
              setTimeout(() => {
                error.remove();
              },4000);
            }
            function validate(reg, inp) {
              return reg.test(inp);
            }
          };



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        removeVal();

        checkFields();

        checkEmailValid();
        checkTelValid();
    });
})

