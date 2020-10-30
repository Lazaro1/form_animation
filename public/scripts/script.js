const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");
console.log('passou aqui')
btnLogin.addEventListener("click", event => {
  event.preventDefault();

    const fields = [...document.querySelectorAll(".input-block input")]
    /* verificação se o campo está vazio */
    fields.forEach(field => {
        if (field.value == "") form.classList.add("validate-error")
    });
    
    const error = document.querySelector('.validate-error')
    if(error) {
        error.addEventListener('animationend', event => {
            if(event.animationName == 'nono'){
                error.classList.remove('validate-error')
            }
        })
    } else {
        form.classList.add("form-hide");
    }
});

form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});
