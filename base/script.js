const btnlogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnlogin.addEventListener("click", event => {
    event.preventDefault();
    form.classList.add('form-hide')
})