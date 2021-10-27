const cliente = {
  nome: 'André',
  idade: 36,
  cpf: 12345678900,
  email: 'andre@email.com',
  telefones: ['(34)9.1234-5678', '(34)9.9876-4321']
}

cliente.dependentes = {
  nome: 'Sarah',
  idade: 11,
}

console.log(cliente);

cliente.dependentes.idade = 15;
console.log(cliente);