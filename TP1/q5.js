const http = require('http');
var url = require('url');

const server = http.createServer((req, res) => {

    let msg;

    if (req.url === '/welcome') {
        req.statusCode = 200;
        msg = 'hello world';
    } else {
        req.statusCode = 400;
        msg = 'not found';
    }

    res.end(msg);
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));