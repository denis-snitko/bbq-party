const elMainBody = document.querySelector('.main-body');
const elModalCheck = document.querySelector('.modal-check');
const elSendButton = document.querySelector('.send');
const elModalWarning = document.querySelector('.modal-warning');
const elModalWarningText = document.querySelector('.modal-warning__text');
const promoValue = document.querySelector('input[name="promo"]');
const checkConditions = document.getElementById('conditions');
const checkYes = document.getElementById('yes');
const checkNo = document.getElementById('no');
const checkName = document.getElementById('name');
const checkFam = document.getElementById('fam');
const checkTel = document.getElementById('tel');


let ageValue;
let promo = 111;
let ageTrue = getCookie('age');

function getCookie(name) {
  let cookie = " " + document.cookie;
  let search = " " + name + "=";
  let setStr = null;
  let offset = 0;
  let end = 0;
  if ( cookie.length > 0 ) {
    offset = cookie.indexOf(search);
    if ( offset != -1 ) {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if ( end == -1 ) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return (setStr);
}

function showContent(event) {
  if ( event.target.classList.contains('modal-check__yes') ) {
    
    elModalCheck.remove();
    elMainBody.setAttribute('style', 'display: flex');
    ageValue = true;
    document.cookie = 'age' + '=' + ageValue;
    
  } else if ( event.target.classList.contains('modal-check__no') ) {
    
    elMainBody.remove();
    document.location.href = 'http://google.com';
    
  }
}


function closeWarning(event) {
  if ( event.target.tagName === 'SPAN' ) {
    elModalWarning.setAttribute('style', 'display: none')
  }
}

function showWarning() {
  elModalWarning.setAttribute('style', 'display: block')
  elModalWarning.addEventListener('click', closeWarning)
}


if ( !ageTrue ) {
  elModalCheck.addEventListener('click', showContent)
} else {
  elModalCheck.remove();
  elMainBody.setAttribute('style', 'display: flex');
}


elSendButton.addEventListener('click', (event) => {
  
  if ( promoValue.value.length > 0 && promoValue.value == promo ) {
    elModalWarningText.textContent = 'Заявка принята!'
    showWarning()
    
  } else {
    event.preventDefault()
    elModalWarningText.textContent = 'Промокод введен не верно!'
    showWarning()
  }
  
  if (checkYes.checked || checkNo.checked) {
    return null
  } else {
    elModalWarningText.textContent = 'Вы должны определиться идете ли на мероприятие!'
    showWarning()
  }
  
  if(checkConditions.checked){
    return null
  } else {
    elModalWarningText.textContent = 'Вы не согласились с условиями акции!'
    showWarning()
  }
  
  if (checkName.value.length == 0) {
    elModalWarningText.textContent = 'Заполните все поля!'
    showWarning()
  }
  
  if (checkFam.value.length == 0) {
    elModalWarningText.textContent = 'Заполните все поля!'
    showWarning()
  }
  
  if (checkTel.value.length == 0) {
    elModalWarningText.textContent = 'Заполните все поля!'
    showWarning()
  }
  
})

let maskOptions = {
  mask: '+{7}(000)000-00-00'
};
let mask = IMask(checkTel, maskOptions);
