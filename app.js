const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is first Git');
});

const port = process.env.PORT | 8082;

app.listen(port, ()=>console.log(`Sever running on port ${port}`));