const express = require("express")
const app = express();
const user_controller = require('./controller/user_controller')

app.use(express.json());
app.use('/api/user',user_controller);










module.exports = app 
