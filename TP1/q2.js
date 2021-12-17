const http = require('http');

const server = http.createServer((req, res) => {
    res.end(JSON.stringify({
        "message": "Hello World",
        "status": 200
    }));
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));