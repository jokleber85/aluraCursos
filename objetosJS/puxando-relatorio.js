const cliente = {
    nome: 'André',
    idade: 36,
    cpf: 12345678900,
    email: 'andre@email.com',
    telefones: ['(34)9.1234-5678', '(34)9.9876-4321'],
    dependentes: [
      {
        nome: 'Sarah',
        idade: 11,        
      },
      {
        nome: 'Maria',
        idade: 15,        
      },
    ],
    saldo: 100,
  
    depositar: function(valor){
      this.saldo += valor;
    }
};

let relatorio = ''; 
for (let info in cliente){
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue;
    }else {
        relatorio += `${info}: ${cliente[info]}
        `;
    } 
}

console.log(relatorio);