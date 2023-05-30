
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import router from './routes/routes'
const app = express()
const PORT = process.env.PORT || 7000
app.get('/api', router)
app.get('/healthCheck', (req: Request, res: Response)=> {
    res.send(200).json({"health status": "okay"})
})
app.listen(PORT, ()=> {
    console.log(`App is running on ${PORT}`)
})

