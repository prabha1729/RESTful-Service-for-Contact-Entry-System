const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const uri = "mongodb+srv://user:user@cluster0.zaqrq.mongodb.net/rest?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const contactRouter = require('./controllers/contacts');


app.use(bodyParser.json());
app.use('/contacts', contactRouter);

//connect to DataBase
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to DB");
});

app.listen(port);

