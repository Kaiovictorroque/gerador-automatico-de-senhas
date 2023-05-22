/* Você está selecionado os ids que recebra o valor e aparecerá na tela */

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
/* está pegadando id do input, button e os referenciando ao input quando ele for acessado. */

/* Quando a pessoa por os caracteres, para ele aparecer na tela, precisar pegar o id do tamnho e o referenciar tbm 
e aparecer quando estiver sendo selecionado*/
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function generatePassword(){

    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
  }
  
  function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
  }