class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(`Saldo: ${this.saldo}`);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, cpf, email, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca +=valor;
    }
}

const andre = new ClientePoupanca ('Andre', 'andre@email.com', 12345678900, 100, 300);
andre.depositar(50);
andre.depositarPoupanca(100);

console.log(andre); 