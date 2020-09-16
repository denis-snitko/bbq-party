const elMainBody = document.querySelector('.main-body');
const elModalCheck = document.querySelector('.modal-check');

let ageValue;
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

if ( !ageTrue ) {
  elModalCheck.addEventListener('click', showContent)
} else {
  elModalCheck.remove();
  elMainBody.setAttribute('style', 'display: flex');
}



