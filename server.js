const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const dataBase = require('./config/database.config');
const app = express();
var note = require('./app/routes/note.routes')

app.use(bodyParser.urlencoded({extended:true}))


app.use(bodyParser.json());

app.use('/note', note);

app.get('/',(req, res)=>{
    res.json({"message": "Welcome to easy notes"})
})

dataBase.mongoose;

app.listen(port, ()=>{
    console.log("server is listening on "+port)
})
