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

const andre = new Cliente('Andre', 12345678900, 'andre@email.com', 100);

console.log(andre.exibirSaldo);