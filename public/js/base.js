const nome="Franciel";
let nome2= "";
let pessoaDeafault = {
    nome: "Gira",
    idade: "24",
    trabalho: "docinho do time"
}


let nomes = ["Januário", "Josiane", "Jorlene"];
let pessoas = [
    {
        nome: "Januário",
        idade: "24",
        trabalho: "docinho do time"
    },
    {
        nome: "Josiane",
        idade: "37",
        trabalho: "recepcionista"  
    },
    {
        nome: "Jorlene",
        idade: "30",
        trabalho: "cachaceira"
    }
];
//console.log("valor inicial:"); console.log(nome2); nome2 = "Nome que coloquei após o teste"; console.log("valor alterado:"); console.log(nome2);

function alterarNome(){
    nome2 = "teste função alterar nome";
    console.log("valor alterado:");
    console.log(nome2);
}

function  recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor recebido e alterado:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
      
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("-----IMPRIMIR PESSOAS-----")
    pessoas.forEach((item) =>{
        console.log("nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();


adicionarPessoa({
    nome: "Giorgio",
    idade: "26",
    trabalho: "modelo"
});

imprimirPessoas();

console.log(pessoas);

//imprimirPessoa(pessoaDeafault);

//imprimirPessoa({nome: "Josiane", idade: "37", trabalho: "recepcionista"});




//alterarNome();
//recebeEalteraNome("Nome alterado pela função, beijos");
//recebeEalteraNome("Nome alterado pela função, novamente garai");
