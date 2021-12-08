//document.getElementById("link-conta").addEventListener("click", function(){
 //       console.log("o usuário clicou no link criar conta");
//}) exemplo
const myModal = new bootstrap.Modal("#register-modal");

let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();
// LOGAR NO SISTEMA

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value; //fiz igual o professor e ainda deu errado
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account){
        alert("Dados incorretos, verifique os dados e tente novamente.(foi o email)"); //adicionei(foi o email) e (foi a senha) para saber onde está o erro
        return;
    }

    if(account){
        if(account.senha!==password){ //fiz do jeito do professor e deu errado
            alert("Dados incorretos, verifique os dados e tente novamente.(foi a senha)");
            return;
        }
        saveSession(email, checkSession)
        
        window.location.href = "home.html";
    }



});


// CRIAR CONTA

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email-create-input").value;
    const senha = document.getElementById("password-create-input").value;
    
    if(email.length < 5){
        alert("email inválido!");
        return;
    }
    
    if(senha.length < 4){
        alert("utilize uma senha com mínimo de 4 dígitos");
        return;
    }
    saveAccount({
        login: email,
        senha: senha,
        transactions: []
    });

    myModal.hide();

    alert("conta criada com sucesso!");
});


function checkLogged(){
    if(session){
        sessionStorage.getItem("logged", session);
        logged = session;
    }

    if(logged){
        saveSession(logged, session);

        window.location.href="home.html";
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data)
    }
    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }
    
    return "";
}

