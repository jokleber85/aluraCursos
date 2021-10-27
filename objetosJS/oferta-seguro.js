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


console.log(Object.keys(cliente)); // array chaves
console.log(Object.values(cliente)); // array valores
console.log(Object.entries(cliente)); // arrays chaves, valores


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')){
        console.log(`Oferta Seguro para ${obj.nome}`);
    }
}

// oferecerSeguro(cliente);

