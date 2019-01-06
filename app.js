function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //create a the delete button
    let deleteButton = document.createElement('button');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    deleteButton.type = "button";

    // set the title
    newLi.textContent = title;

    // button text
    deleteButton.textContent = "Delete To-Do";

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the deleteButton to the li
    newLi.appendChild(deleteButton);

    // attach the checkbox to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    deleteButton.addEventListener('click', deleteToDo);

    function deleteToDo() {
      newLi.parentNode.removeChild(newLi);
    }

  });
}




window.onload = function() {
  onReady();
}
