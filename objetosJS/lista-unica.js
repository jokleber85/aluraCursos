const cliente = [
  {
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
    ],
    saldo: 100,
  },
  {
    nome: 'Juliana',
    idade: 25,
    cpf: 98765432100,
    email: 'juliana@email.com',
    telefones: ['(34)5.9876-5465', '(34)5.1234-9876'],
    dependentes: [
      {
        nome: 'Barbara',
        idade: 5,
      },
    ]
  }
];

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];

console.log(listaDependentes);
console.table(listaDependentes);