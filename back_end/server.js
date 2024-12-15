const app = require('./app');
const dotenv = require('dotenv').config()
require('./config/db_connect')

const port = process.env.PORT || 3000;

app.listen( port ,()=>{
    console.log(`app running on port ${port}`)
})


