
import express from 'express'
import { Request, Response, NextFunction } from 'express'
const app = express()
const PORT = process.env.PORT || 7000
app.listen(PORT, ()=> {
    console.log(`App is running on ${PORT}`)
})

