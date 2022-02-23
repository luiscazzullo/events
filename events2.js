const cardWrapper = document.querySelector('.card');
const cardTitle = document.querySelector('.card-title');
const cardBody = document.querySelector('.card-body');
const cardButton = document.querySelector('.card-button');

cardWrapper.addEventListener('click', (event) => {
  if(event.target.id === 'button') {
    alert('Alerta desde el card body')
  } else if (event.target.classList.contains('card-title')) {
    alert('Alerta desde el card title');
  } else if (event.target.classList.contains('card-button')) {
    alert('Alerta desde el botón')
  } else {
    alert('Alerta desde el card container');
  }
});