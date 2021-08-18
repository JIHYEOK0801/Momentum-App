const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
/*form 의 기본동작은 submit
submit이 될때 자동적으로 새로고침 되는 것이 기본
preventDefault로 기본동작을 막는 것*/
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username",username);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    /*greeting.innerText = "Hello "+ username; 과 같은 의미*/
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit);

