const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAddTask(e.target.new_task.value);
    form.reset();
    saveTodos(todoEl);
  });
});

const handleAddTask = (todos) => {
  const task = document.createElement("p");
  const btn = document.createElement("button");
  btn.textContent = "x";
  btn.addEventListener("click", handleDeleteButton);
  const todoEl = document.querySelector("#tasks");
  task.textContent = todos;
  task.appendChild(btn);
  todoEl.appendChild(task);
  saveTodos(todoEl);

  if (todoEl.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "You have 0 task";
    todoEl.appendChild(emptyMessage);
  }
};

const handleDeleteButton = (e) => {
  e.target.parentNode.remove();
};
