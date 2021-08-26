const env=require('dotenv').config()
const express=require('express')
const app=express()
app.use(express.json())

app.use('/',require('./router/index.js'))

const port=process.env.PORT





app.listen(port,()=>{
    console.log(`Server Is Running On Port ${port}.... `);
})




