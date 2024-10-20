const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageTextArea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verificar se o nome está vazio
    if(nameInput.value === "") {
        alert("Escreva o seu nome.");
        return;
    }
    //Verificar se o email esta preenchido e valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Escreva o seu e-mail.");
        return;
    }
    //Verificar se a mensagem foi preenchida.
    if(messageTextArea.value === "") {
        alert("Escreva a sua mensagem.");
        return;
    }

    //Se todos os campos estiverem preenchidos envie o formulario
    form.submit(); 
})

//Função que valida o e-mail
function isEmailValid(email) {
    //Criar um regex que valida o e-mail
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}
