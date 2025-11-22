const  mongoose  = require("mongoose")
require('dotenv').config()



const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(res=>{
    console.log("Database connected to Server");
    
}).catch(err=>{
    console.log("Connection faild",err);
    
})
