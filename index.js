const express = require ('express')
const cors = require ('cors')
const app = express()
require('./db/db')
const {readdirSync} = require('fs')
const { route } = require('./routes/transaction')
require ('dotenv').config()

const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(cors())


readdirSync('./routes').map((route) => app.use('/apiv1',require('./routes/'+ route)))


const server = () => {
   app.listen(PORT,()=> {
    console.log('server is running at port:',PORT);
     })
    
}
server()