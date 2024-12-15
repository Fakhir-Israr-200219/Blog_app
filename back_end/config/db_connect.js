const mongoose = require('mongoose');

mongoose.connect(process.env.conection_string)
const db = mongoose.connection

db.on('connected',()=>{
    console.log("data base connected successfully")
})


db.on('error',()=>{
    console.log("error accoure")
})
