const todoWrapper = document.querySelector(".todo-list-container");
const userInput = document.getElementById("usertodo");
const submitBtn = document.getElementById("submitbtn");

class Todo {
  constructor(title, completed = false) {
    this.title = title; // Title of the task
    this.completed = completed; // Whether the task is completed
  }
}

const todos = [
  new Todo("Buy groceries"),
  new Todo("Walk the dog", true),
  new Todo("Pay bills", true),
  new Todo("Read a book"),
  new Todo("Go to the gym", false),
];

submitBtn.addEventListener("click", () => {
  const userValue = userInput.value;
  if (userValue && userValue.length > 0) {
    console.log(userValue);
    todos.push(new Todo(userValue, false));
    getListofTask();
  } else {
    alert("Enter the Task");
  }
});

function getListofTask() {
  console.log(todos);
  // for (let i = 0; i < todos.length; i++) {
  //   createTodoTemplate(todos[i], i);
  // }

  // Loop through tasks and create list items
  todos.forEach((task, index) => {
    createTodoTemplate(task, index);
  });
}

function createTodoTemplate(todo, index) {
  todoWrapper.innerHTML = ""; //Clear List

  const todoContainer = document.createElement("div");
  todoContainer.className = "todo-list-item";

  const todoinfo = document.createElement("div");
  todoinfo.className = "todoinfo";

  const inputBtn = document.createElement("input");
  inputBtn.className = "todo-checkbtn";
  inputBtn.setAttribute("type", "checkbox");
  inputBtn.id = "todobtn" + index;

  inputBtn.onclick = () => {
    getCompleteTask(index);
  };

  const label = document.createElement("label");
  label.setAttribute("for", "todobtn" + index);

  const spanEle = document.createElement("span");
  spanEle.className = "todo-txt";
  spanEle.innerHTML = todo.title;

  if (todo.completed) {
    spanEle.classList.add("active");
  }

  const deletBtn = document.createElement("span");
  deletBtn.innerHTML = "+";
  deletBtn.className = "todo-deletebtn";

  deletBtn.onclick = () => {
    getDeleteTask(index);
  };

  todoinfo.append(inputBtn, label, spanEle);
  todoContainer.append(todoinfo);
  todoContainer.append(deletBtn);
  todoWrapper.append(todoContainer);
  console.log(todoWrapper, index);
}

function getCompleteTask(index) {
  const task = todos[index];
  task.completed = true;
  // console.log(todos[index]);
  getListofTask();
}

function getDeleteTask(index) {
  todos.splice(index, 1);
  getListofTask();
}

getListofTask();
