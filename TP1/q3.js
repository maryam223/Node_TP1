const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end(JSON.stringify({
        "firstname": "Maryam",
        "lastname": "TRAORE",
        "birthdate": "31 Janvier 1997",
        "color": "yellow"
    }));
});

server.listen(3000, () => console.log('Le serveur tourne sur http://localhost:3000'));