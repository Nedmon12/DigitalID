import { Response } from 'express'
import jwt from 'jsonwebtoken'
import {AccessTokenPayload, RefreshTokenPayload} from '../shared'

const isProduction = process.env.ENVIRONMENT == 'production'
enum TokenExpiration{
    Access = 5*60,
    Refresh = 7*24*60*60
}
enum Cookies {
    AccessToken = 'access',
    RefreshToken = 'refresh'
}
//TODO
//define User schema
export function buildToken(user: typeof User) {
    const accessPayload : AccessTokenPayload = {userId: user.id}
    const refreshPayload : RefreshTokenPayload = {userId: user.id, version:user.tokenVersion}

    const accessToken = jwt.sign(accessPayload,process.env.ACCESS_TOKEN_SECRET, {expiresIn:TokenExpiration.Access})
    const refreshToken = jwt.sign(refreshPayload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:TokenExpiration.Refresh})

    return {accessToken,refreshToken}
}

export function setToken(res: Response, access:String, refresh?:string){
    res.cookie(Cookies.AccessToken, access, {httpOnly:true,secure:isProduction,sameSite: isProduction ? 'strict': 'lax', domain: process.env.BASE_DOMAIN, path:'/', maxAge: TokenExpiration.Access*1000})
    if (refresh) res.cookie(Cookies.AccessToken, access, {httpOnly:true,secure:isProduction,sameSite: isProduction ? 'strict': 'lax', domain: process.env.BASE_DOMAIN, path:'/', maxAge: TokenExpiration.Refresh*1000})
}