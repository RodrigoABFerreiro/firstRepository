//Criar um sistema que calcula a média de 4 valores (números reais) inseridos pelo usuário.

//ENTRADA DE DADOS
let numero1 = parseFloat(prompt("Digite o Primeiro Número:"))
let numero2 = parseFloat(prompt("Digite o Segundo Número:"))
let numero3 = parseFloat(prompt("Digite o Terceiro Número:"))
let numero4 = parseFloat(prompt("Digite o Quarto Número:"))

//PROCESSAMENTO DE DADOS
let resultado = (numero1 + numero2 + numero3 + numero4) / 4

//SAÍDA DE DADOS
alert("A média é: " + resultado + ". Adeus!")