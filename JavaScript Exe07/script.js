try {
    // Solicita dois números ao usuário
    const numero1 = 10;
    const numero2 = 20;

    
    if (isNaN(numero1) || isNaN(numero2)) { // Verifica se o segundo número é zero      
      throw new Error("Por favor, digite números válidos."); // Lança uma exceção personalizada se os números não forem válidos
    }
    
    if (numero2 === 0) { // Verifica se o segundo número é zero      
      throw new Error("Divisão por zero não é permitida."); // Lança uma exceção personalizada
    }
    
    let resultado = numero1 / numero2; // Realiza a divisão e exibe o resultado
    console.log(`Resultado da divisão: ${resultado}`);

} catch (erro) {    
    console.error(`Ocorreu um erro: ${erro.message}`); // Captura e trata a exceção

} finally {    
    console.log("Execução finalizada."); // Bloco opcional que é executado sempre, ocorrendo ou não uma exceção
}
