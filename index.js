const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
const mongoose = require('mongoose');

//using Cors
app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Using routes
app.use('/books', booksRoute);

//Connection to MongoDB
mongoose.connect("mongodb+srv://SivaSSR:Siva2298@cluster.garse2f.mongodb.net/Books?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => console.error('Failed to connect to MongoDB', err));

//Response for get in window
app.get('/', (req, res) => {
    res.send("Hello!!!!!!!!!! - from get method!!"); 
})
//Starting server
const PORT = 4000;
app.listen(PORT, () => {
    console.log("This Node application is running on port ",PORT );
  });