const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const url = process.env.database


mongoose.connect(url, {
    useNewUrlParser:true
})
.then(()=>{
    console.log('successfully connected to database..');
    
})
.catch(err =>{
    console.log('could not connect to database..'+err);
    process.exit();
    
})


