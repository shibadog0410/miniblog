const express = require('express');
const app = express();

const server = app.listen(5000);

app.get('/', (req, res) => {
    res.render('index.ejs');
});