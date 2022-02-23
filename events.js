/* const button2 = document.querySelector('#button2');

//No se le puede pasar parámetros
button2.onclick = function() {
  alert('Hola mundo desde atributo');
}

//ADD EVENT LISTENER
const button3 = document.querySelector('#button3');

function myFunction() {
  alert('Alert desde el event listener');
};

button3.addEventListener('click', function(event) {
  event.target.textContent = 'Cambiar texto';
  event.target.classList.toggle('button');
});
 */

/* const verMas = document.querySelector('#ver-mas');
const text = document.querySelector('#hide-text');

verMas.addEventListener('click', function() {
  if (verMas.textContent === 'Ver mas') {
    verMas.textContent = 'Ocultar';
  } else {
    verMas.textContent = 'Ver mas';
  }
  text.classList.toggle('hide');
}); */

const menuItems = document.querySelectorAll('.menu-item');
const content = document.querySelector('.content');

const contentText = [
  'Contenido 1',
  'Contenido 2',
  'Contenido 3'
];

content.textContent = contentText[0];

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    content.textContent = contentText[index];
    menuItems.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
  });
});

