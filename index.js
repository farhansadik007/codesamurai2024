import express from "express"
import bodyParser from "body-parser"
import Cors from 'cors'


import dotenv from 'dotenv'
import Router from './src/Router/route.js'
import Connection from './database.js'

dotenv.config();

const app = express()

app.use(Cors())
app.use(bodyParser.json({ extended: true, limit: 52428800 }))
app.use(bodyParser.urlencoded({ extended: true, limit: 52428800 }))

app.use('/', Router)


app.listen(8000, () => {
    console.log("Phew! - CodeSamurai Server connected succcessfully!")
})

Connection()