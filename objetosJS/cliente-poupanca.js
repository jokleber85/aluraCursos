function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca){
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoupanca = saldoPoupanca;
}

const juliana = new ClientePoupanca('Juliana', '12345678000', 'juliana@email.com', 100, 250);

console.log(juliana);

ClientePoupanca.prototype.depositarPoupanca = function(valor){
  this.saldoPoupanca += valor;
}

juliana.depositarPoupanca(50);

console.log(juliana.saldoPoupanca);