import express from "express"
import bodyParser from "body-parser"
import Cors from 'cors'

import Connection from "./database.js"

import dotenv from 'dotenv'
import router from "./src/Router/router.js"


dotenv.config();

const app = express()

app.use(Cors())
app.use(bodyParser.json({ extended: true, limit: 52428800 }))
app.use(bodyParser.urlencoded({ extended: true, limit: 52428800 }))

app.use('/', router)


app.listen(8000, () => {
    console.log("Phew! - CodeSamurai Server connected succcessfully!")
})

Connection()