const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');


// routes
const books = require('./routes/api/books');

const app = express();

//Connect Database
connectDB();

//cors
app.use(cors({origin: true, credentials: true}));

//Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/books', books);

const port = process.env.PORT | 8082;

app.listen(port, ()=>console.log(`Sever running on port ${port}`));