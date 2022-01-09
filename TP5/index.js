const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./models/User.model.js');

const port = 3000;
const app = express();

app.use(bodyParser.json());

require("./routes")(app);

app.get('/', async function(req, res) {
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });
    res.json(jane);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});