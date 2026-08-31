function todo() {
  const todos = [];

  const inputTodoBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');

  addButton.addEventListener('click', (event) => {
    const todoText = inputTodoBox.value;

    todos.push(todoText);

    inputTodoBox.value = '';

    showTodos();
  });

  function showTodos() {
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
      const li = document.createElement('li');

      li.textContent = todo;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';

      deleteButton.addEventListener('click', () => {
        deleteTodo(index);
      });

      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
  }

  function deleteTodo(index) {
    todos.splice(index, 1);

    showTodos();
  }
}

todo();
