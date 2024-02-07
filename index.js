import express  from "express"
import bodyParser from "body-parser"
import Cors from 'cors'
import Connection from "./database.js"
import Router from "./Router/route.js"
import dotenv from 'dotenv'
dotenv.config();
// import Connection from "./DB/database.js"
// import Router from "./Router/route.js"

const app=express()
app.use(Cors())
app.use(bodyParser.json({extended:true,limit : 52428800}))
app.use(bodyParser.urlencoded({extended:true,limit:52428800}))

app.use('/',Router)


app.listen(8000,()=>{
    console.log("Server connected succcessfull")
})
Connection()