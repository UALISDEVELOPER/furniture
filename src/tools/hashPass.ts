import {genSalt, hash} from "bcrypt"
import {NextFunction, Request, Response} from "express"


const hashPass = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const salt = await genSalt(10)
        const newPass =await hash(req.body.password,`${salt}`)
    
        req.body.hashedPass= newPass
        next();
    }catch(err){
        next(err);
    }
}

export {hashPass};