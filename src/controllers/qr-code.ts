import QRcode from 'qrcode'
import { Response, Request } from 'express'

export function getqrCode(res: Response, req: Request) {
QRcode.toDataURL('I am a pony!', (err, url)=>{
    console.log(url)
    return res.status(200).json(url)
})

}