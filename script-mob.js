const burgerMenu = document.querySelector('.burger-btn');
const burgerCross = document.querySelector('.burger-btn-cross');
const navMenu = document.querySelector('.mob-header--main-nav');


burgerMenu.addEventListener('click', function (evt) {
  evt.preventDefault();
  navMenu.classList.toggle('visually-hidden');
  burgerMenu.classList.add('visually-hidden');
  burgerCross.classList.remove('visually-hidden');
});
burgerCross.addEventListener('click', function (evt) {
  evt.preventDefault();
  navMenu.classList.toggle('visually-hidden');
  burgerMenu.classList.remove('visually-hidden');
  burgerCross.classList.add('visually-hidden');
});

// пример
//  const eyeButtons = Array.from(document.querySelectorAll(".eye"));

//  eyeButtons.forEach(button => {
//    let isVisible = false;
//    button.addEventListener('click', (e) => {
//      const input = button.parentElement.querySelector('.password');
//      isVisible = !isVisible;
//      navMenu.classList.toggle('visually-hidden');
//      button.src = isVisible ? 'pic/eye.png' : 'pic/eye-slash.png';
//      input.type = isVisible ? 'text' : 'password';
//    });
//  });


const mobHeaderSignBtn = document.querySelector('.mob-header--sign-btn');
const form = document.querySelector('.form');
const formSend = document.querySelector('.form-send');
const closeBtn = document.querySelector('.close-btn');
const sendBtn = document.querySelector('.button-send');



mobHeaderSignBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('visually-hidden');
});
closeBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('visually-hidden');
});

sendBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  // тут могла бы быть валидация
  //form.submit(); - при добавлении этого кода не работает всплывающее окно "понятно"
  form.classList.toggle('visually-hidden');
  formSend.classList.toggle('visually-hidden');
  form.submit();
});