const clientes = [
  {
    id: 1,
    nome: 'Maria Souza',
    idade: 29,
    cidade: 'São Paulo',
    pedidos: [
      { codigo: 'P001', produto: 'Notebook', quantidade: 1 },
      { codigo: 'P002', produto: 'Mouse', quantidade: 2 }
    ]
  },
  {
    id: 2,
    nome: 'João Pereira',
    idade: 34,
    cidade: 'Rio de Janeiro',
    pedidos: [
      { codigo: 'P003', produto: 'Teclado', quantidade: 1 }
    ]
  },
  {
    id: 3,
    nome: 'Ana Costa',
    idade: 25,
    cidade: 'Belo Horizonte',
    pedidos: []
  }
];

module.exports = { clientes };
