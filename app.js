function onReady() {
<<<<<<< HEAD
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');
}

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
=======
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
>>>>>>> checkpoint-6-dom-dos

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit',event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}


window.onload = function() {
  onReady();
}
