function saudacao() {
    console.log("Olá! Bem-vindo à calculadora."); // Função tradicional sem parâmetros
}
function somar(a, b) { // Função tradicional com parâmetros e retorno de valor
    return a + b;
}
const multiplicar = (a, b) => a * b; // Arrow function com parâmetros e retorno de valor

saudacao(); // Saudação ao usuário

// Exemplo de uso das funções em uma calculadora simples
let num1 = 5; // coloquei qualquer numero para servi de exemplo
let num2 = 3; // coloquei qualquer numero para servi de exemplo

// Utiliza a função de soma
let resultadoSoma = somar(num1, num2);
console.log(`A soma de ${num1} e ${num2} é: ${resultadoSoma}`);

// Utiliza a arrow function de multiplicação
let resultadoMultiplicacao = multiplicar(num1, num2);
console.log(`A multiplicação de ${num1} e ${num2} é: ${resultadoMultiplicacao}`);
