const express = require('express');
const path = require('path');
const app = express();
app.listen(3020)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.use(express.static('public'))