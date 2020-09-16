const elMainBody = document.querySelector('.main-body');
let age = confirm('Вам есть 18 лет?');


if (age) {
  elMainBody.setAttribute('style', 'display: flex');
} else {
  elMainBody.remove();
  document.location.href = 'http://google.com';
}
