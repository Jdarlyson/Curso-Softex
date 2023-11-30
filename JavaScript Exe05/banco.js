let Banco = {
  conta: "123456",
  saldo: 2000,
  tipoConta: "Corrente",
  agencia: "7890",

  buscarSaldo: function () {
    return this.saldo;
  },

  deposito: function (valor) {
    this.saldo += valor;
    return `Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`;
  },

  saque: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de ${valor} realizado. Novo saldo: ${this.saldo}`;
    } else {
      return "Saldo insuficiente para realizar o saque.";
    }
  },

  numeroConta: function () {
    return this.conta;
  }
};

  