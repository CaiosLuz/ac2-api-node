const express = require ('express');
const professorRouter = require('./routes/professores');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', professorRouter);

app.get('/', (req, res) => {
    res.json({ mensagem: 'API de professores' });
});

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
})