module.exports = function(app) {



    app.get('/hello-world', (req, res) => {
        res.json({ "message": "Hello World" });
    });

    app.get('/message', (req, res) => {

        if (req.query.message.length > 20) {
            res.status(400).json({ "message": "Bad Request" });
        } else {
            res.send(req.query.message);
        }

    });

    app.post('infos/headers', (req, res) => {
        res.send(req.headers);
    });

    app.get('/rick-roll', (req, res) => {
        res.redirect("https://youtu.be/dQw4w9WgXcQ");
    });

    app.delete('custom-header', (req, res) => {
        res.set({
            "content-type": "application/json",
            Message: "Hello world!",
        });
        res.send();
    });

    app.get('/params/:id/:key/:slug', (req, res) => {
        res.send(req.params);
    });
}