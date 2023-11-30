// Objeto Mesa
let mesa = {
    // Atributos
    material: "Madeira",
    altura: 80,
    cor: "Marrom",
  
    // Métodos
    adicionarItem: function (item) {
      console.log(`Adicionando ${item} na mesa.`);
    },
  
    limparMesa: function () {
      console.log("Limpando a mesa.");
    },
  
    ajustarAltura: function (novaAltura) {
      this.altura = novaAltura;
      console.log(`Altura da mesa ajustada para ${novaAltura} cm.`);
    }
  };
  
  // Objeto Carro
  let carro = {
    // Atributos
    modelo: "Toyota Corolla",
    cor: "Prata",
    velocidadeAtual: 0,
  
    // Métodos
    ligarMotor: function () {
      console.log("Ligando o motor do carro.");
    },
  
    acelerar: function () {
      this.velocidadeAtual += 10;
      console.log(`Acelerando o carro. Velocidade atual: ${this.velocidadeAtual} km/h.`);
    },
  
    parar: function () {
      this.velocidadeAtual = 0;
      console.log("Parando o carro.");
    }
  };
  
  // Objeto Conta Bancária
  let contaBancaria = {
    // Atributos
    numeroConta: "123456",
    saldo: 1000,
    titular: "Maria Silva",
  
    // Métodos
    consultarSaldo: function () {
      console.log(`Saldo atual: ${this.saldo}`);
    },
  
    realizarDeposito: function (valor) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
    },
  
    efetuarSaque: function (valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
      } else {
        console.log("Saldo insuficiente para realizar o saque.");
      }
    }
  };
  
  // Objeto Tarefa
  let tarefa = {
    // Atributos
    descricao: "Estudar JavaScript",
    status: "Não Concluída",
    dataConclusao: null,
  
    // Métodos
    iniciarTarefa: function () {
      console.log(`Iniciando a tarefa: ${this.descricao}`);
    },
  
    concluirTarefa: function () {
      this.status = "Concluída";
      this.dataConclusao = new Date().toLocaleDateString();
      console.log(`Tarefa concluída em ${this.dataConclusao}.`);
    },
  
    adiarTarefa: function () {
      console.log("Adiando a tarefa para outro momento.");
    }
  };
  
  // Exemplos de uso
  mesa.adicionarItem("Livro");
  mesa.limparMesa();
  mesa.ajustarAltura(90);
  
  carro.ligarMotor();
  carro.acelerar();
  carro.parar();
  
  contaBancaria.consultarSaldo();
  contaBancaria.realizarDeposito(500);
  contaBancaria.efetuarSaque(200);
  
  tarefa.iniciarTarefa();
  tarefa.concluirTarefa();
  tarefa.adiarTarefa();
  