import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { buildToken } from '../middlewares/auth'

export function login (req: Request, res: Response) {
    const {username, password} = req.body
    //
    const user = db.findOne({username: username}) //I know db is undefined right now haven't decided yet
    if (!user) {
        //user not found
        return res.status(400).json({"error": "user not found"})
    }
    else {
        //logim
        const token = buildToken(user)
        //do I set token here?
        return res.status(200).json({token})
    }
}
