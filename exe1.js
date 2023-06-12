var nome  = "Samara";
var telefone = "11914234";
var convenio = false
var profissao = "Desenvolvedora"
var salario = 3000

var concatenacao 

if (convenio == true){
    concatenacao = "A " + nome + " é " + profissao + ", seu salario é " + salario + 
    ", seu telefone é o " + telefone +". Em relação ao convenio, ela possui";
}
else{
    concatenacao = "A " + nome + " é " + profissao + ", seu salario é " + salario + 
    ", seu telefone é o " + telefone +". Em relação ao convenio, ela não possui ";
}

console.log(concatenacao)