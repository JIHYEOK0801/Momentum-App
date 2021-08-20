const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDo_Form = document.querySelector("#todo-form");
const toDo_ListBox = document.querySelector("#todo-list-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const LAYOUT_CLASSNAME = "login-form-initiallayout";
const LAYOUT_TODO_LIST_BOX = "todo-list-box-layout";
const LAYOUT_TODO_FORM = "todo-form-layout";
const savedUsername = localStorage.getItem(USERNAME_KEY);
/*form 의 기본동작은 submit
submit이 될때 자동적으로 새로고침 되는 것이 기본
preventDefault로 기본동작을 막는 것*/

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(LAYOUT_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;

  toDo_Form.classList.remove(HIDDEN_CLASSNAME);
  toDo_Form.classList.add(LAYOUT_TODO_FORM);

  toDo_ListBox.classList.remove(HIDDEN_CLASSNAME);
  toDo_ListBox.classList.add(LAYOUT_TODO_LIST_BOX);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
