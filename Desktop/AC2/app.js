const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clientesRoutes');

app.use(express.json());
app.use(clientesRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de clientes e pedidos funcionando' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
