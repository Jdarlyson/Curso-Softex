try {
    // Solicita dois números ao usuário
    const numero1 = 10;
    const numero2 = 20;

    // Verifica se o segundo número é zero
    if (isNaN(numero1) || isNaN(numero2)) {
      // Lança uma exceção personalizada se os números não forem válidos
      throw new Error("Por favor, digite números válidos.");
    }

    // Verifica se o segundo número é zero
    if (numero2 === 0) {
      // Lança uma exceção personalizada
      throw new Error("Divisão por zero não é permitida.");
    }

    // Realiza a divisão e exibe o resultado
    let resultado = numero1 / numero2;
    console.log(`Resultado da divisão: ${resultado}`);

} catch (erro) {
    // Captura e trata a exceção
    console.error(`Ocorreu um erro: ${erro.message}`);

} finally {
    // Bloco opcional que é executado sempre, ocorrendo ou não uma exceção
    console.log("Execução finalizada.");
}
