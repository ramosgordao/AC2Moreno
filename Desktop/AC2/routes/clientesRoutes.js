const express = require('express');
const router = express.Router();

const {
  listarClientes,
  buscarClientePorId,
  listarPedidosCliente,
  atualizarCliente,
  adicionarPedido,
  listarClientesPorCidade,
  removerCliente
} = require('../controller/clientesController');

router.get('/clientes', listarClientes);
router.get('/clientes/cidade/:cidade', listarClientesPorCidade);
router.get('/clientes/:id', buscarClientePorId);
router.get('/clientes/:id/pedidos', listarPedidosCliente);
router.put('/clientes/:id', atualizarCliente);
router.post('/clientes/:id/pedidos', adicionarPedido);
router.delete('/clientes/:id', removerCliente);

module.exports = router;
