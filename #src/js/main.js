const elMainBody = document.querySelector('.main-body');
const elModalCheck = document.querySelector('.modal-check');

elModalCheck.addEventListener('click', (event) => {
  
  if ( event.target.classList.contains('modal-check__yes') ) {
    
    elModalCheck.remove();
    elMainBody.setAttribute('style', 'display: flex');
    
  } else if ( event.target.classList.contains('modal-check__no') ) {
    
    elMainBody.remove();
    document.location.href = 'http://google.com';
    
  }
  
})
