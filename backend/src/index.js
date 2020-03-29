const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors()); // Em produção, adicionar um objeto com uma origin, p. ex, {origin: 'http://meuapp.com'}.
app.use(express.json());
app.use(routes);

app.listen(3333);