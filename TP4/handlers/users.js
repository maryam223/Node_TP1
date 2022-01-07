module.exports = function(app) {

    const getUsers = app.get('/users', (req, res) => {
        res.send('All users');
    });

    const getUser = app.get('/user/:id', (req, res) => {
        res.send(`User id : ${req.params.id}`);
    });

    const createUser = app.get('/users', (req, res) => {
        res.send("Create user");
    });

    const deleteUser = app.get('/user/:id', (req, res) => {
        res.send(`Delete user id : ${req.params.id}`);
    });
}