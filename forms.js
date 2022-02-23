/* const form = document.querySelector('#login-form');
const nameInput = document.querySelector('#nameInput');
const password = document.querySelector('#passInput');

const login = (username, password) => {
  console.log(username, password);
}

const makeLogin = event => {
  event.preventDefault();
  login(nameInput.value, password.value);
}

form.addEventListener('submit', makeLogin); */

/* form.addEventListener('copy', (event) => {
  event.preventDefault();
}) */

//Seccion de comentarios
const comments = [];
const allCommentsEl = document.querySelector('#comments');
const commentForm = document.querySelector('#comment-form');
const username = document.querySelector('#nameInput');
const commentEl = document.querySelector('#commentInput');
//Seleccionar mensajes de error
const nameError = document.querySelector('#nameError');
const commentError = document.querySelector('#commentError');

commentForm.addEventListener('submit', e => {
  e.preventDefault();
  if(username.value === '') {
    nameError.classList.remove('hide');
    return;
  }
  if(commentEl.value === '') {
    commentError.classList.remove('hide');
    return;
  }
  comments.push({
    username: username.value,
    comment: commentEl.value
  });
  while(allCommentsEl.firstElementChild) {
    allCommentsEl.removeChild(allCommentsEl.firstChild);
  }
  comments.forEach(comment => {
    const p = document.createElement('div');
    p.innerHTML = `
    <p style="font-bold">${comment.username}</p>
    <p>${comment.comment}</p>
  `;
    allCommentsEl.append(p);
  });

  commentForm.reset();
});

console.log(comments)

