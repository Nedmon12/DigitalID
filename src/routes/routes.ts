import express from 'express'
import {Request,Response,NextFunction} from 'express'
import { getqrCode } from '../controllers/qr-code'
const router = express.Router()

router.post("/login",) //login controller //token has ACL
router.post("/register",) //admin user //register voucher //token
router.post("/verify")
router.get("/getqr", getqrCode)
// router.get("/getqr", ()=> {
//     console.log("Tell me why")
// })

export default router