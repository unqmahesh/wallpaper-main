import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'


import errorHandler from './middleware/err-handler.js'
import indexRouter from './router/index-router.js'

const app = express()

app.use(cors({origin : "*", credentials : true}))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/wallpaper-main/api/v1', indexRouter)

app.use(errorHandler)


export default app