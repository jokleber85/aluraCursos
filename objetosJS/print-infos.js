console.log(`Exibir console.log no terminal: node .\\print-infos.js`);

const cliente = {
    nome: 'André',
    idade: 36,
    cpf: 12345678900,
    email: 'andre@email.com'
}

console.log(cliente.nome);
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade}`);
console.log(cliente.email.substring(0,3));
