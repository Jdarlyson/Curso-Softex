let x = Number(prompt("Digite o primeiro número: ")); // Solicita ao usuário que insira o primeiro número
let operador = prompt("Digite o operador: "); // Solicita ao usuário que insira o operador
let y = Number(prompt("Digite o segundo número: ")); // Solicita ao usuário que insira o segundo número

// Declaração de variáveis para o resultado e resto (sobra) da divisão
let resultado;
let sobra;


if (operador === "+") { // Verifica qual operação deve ser realizada com base no operador inserido    
    resultado = x + y; // Soma
    document.write("O resultado da operação é: " + resultado);

} else if (operador === "-") {    
    resultado = x - y; // Subtração
    document.write("O resultado da operação é: " + resultado);

} else if (operador === "*") {    
    resultado = x * y; // Multiplicação
    document.write("O resultado da operação é: " + resultado);

} else if (operador === "/") {    
    resultado = x / y; // Divisão
    sobra = x % y;

    if (sobra !== 0) {        
        document.write("O resultado da operação é: " + parseInt(resultado) +
            " e tem resto " + sobra); // Se houver resto na divisão

    } else {        
        document.write("O resultado da operação é: " + resultado); // Se não houver resto na divisão
    }

} else {    
    document.write("O operador não é válido!"); // Se o operador não for válido
}

    
