// Função para atualizar o saldo na página
function atualizarSaldo() {
    document.getElementById("saldo").innerText = Banco.buscarSaldo();
  }
  
  // Função para realizar depósito
  function realizarDeposito() {
    let valor = parseFloat(document.getElementById("valor").value);
    if (!isNaN(valor)) {
      alert(Banco.deposito(valor));
      atualizarSaldo();
    } else {
      alert("Digite um valor válido.");
    }
  }
  
  // Função para realizar saque
  function realizarSaque() {
    let valor = parseFloat(document.getElementById("valor").value);
    if (!isNaN(valor)) {
      alert(Banco.saque(valor));
      atualizarSaldo();
    } else {
      alert("Digite um valor válido.");
    }
  }
  
  // Inicializa o saldo na página
  atualizarSaldo();
  