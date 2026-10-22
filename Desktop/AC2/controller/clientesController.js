const { clientes } = require('../models/clientesModel');

const listarClientes = (req, res) => {
  res.json(clientes);
};

const buscarClientePorId = (req, res) => {
  const id = Number(req.params.id);
  const cliente = clientes.find((item) => item.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  return res.json(cliente);
};

const listarPedidosCliente = (req, res) => {
  const id = Number(req.params.id);
  const cliente = clientes.find((item) => item.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  return res.json(cliente.pedidos);
};

const atualizarCliente = (req, res) => {
  const id = Number(req.params.id);
  const cliente = clientes.find((item) => item.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const { nome, idade, cidade } = req.body;

  if (nome !== undefined) cliente.nome = nome;
  if (idade !== undefined) cliente.idade = idade;
  if (cidade !== undefined) cliente.cidade = cidade;

  return res.json(cliente);
};

const adicionarPedido = (req, res) => {
  const id = Number(req.params.id);
  const cliente = clientes.find((item) => item.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const { codigo, produto, quantidade } = req.body;

  if (!codigo || !produto || quantidade === undefined) {
    return res.status(400).json({ mensagem: 'Dados do pedido incompletos' });
  }

  const novoPedido = { codigo, produto, quantidade };
  cliente.pedidos.push(novoPedido);

  return res.status(201).json({ mensagem: 'Pedido adicionado com sucesso', pedido: novoPedido });
};

const listarClientesPorCidade = (req, res) => {
  const cidadeInformada = req.params.cidade.toLowerCase();

  const clientesDaCidade = clientes.filter((cliente) => {
    return cliente.cidade.toLowerCase() === cidadeInformada;
  });

  return res.json(clientesDaCidade);
};

const removerCliente = (req, res) => {
  const id = Number(req.params.id);
  const indice = clientes.findIndex((item) => item.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const clienteRemovido = clientes.splice(indice, 1)[0];
  return res.json({ mensagem: 'Cliente removido com sucesso', cliente: clienteRemovido });
};

module.exports = {
  listarClientes,
  buscarClientePorId,
  listarPedidosCliente,
  atualizarCliente,
  adicionarPedido,
  listarClientesPorCidade,
  removerCliente
};
