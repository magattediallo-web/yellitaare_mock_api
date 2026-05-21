const express = require('express');
const initTerminalResponse = require('./data/init-terminal.json');
const creditCardResponse = require('./data/credit-card.json');

const app = express();
const port = 3000;

// Middleware pour parser le JSON des corps de requête
app.use(express.json());

app.post('/api/v1/ws-intit-terminal-json', (req, res) => {
    res.json(initTerminalResponse);
});

app.post('/api/v1/gw-biller/credit-card', (req, res) => {
    res.json(creditCardResponse);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});