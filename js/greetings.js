const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const LAYOUT_CLASSNAME = "login-form-initiallayout";
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
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
