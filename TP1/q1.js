const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 400;
    res.write('400');
    res.end();
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));