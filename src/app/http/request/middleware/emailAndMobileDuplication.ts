import {authModel} from "../../../model/auth"
import { CustomError } from "../error/customError"
import {NextFunction, Request, Response} from "express"


const mobileDuplication = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const mobile = await authModel.findOne({mobile : req.body.mobile})
        if(mobile){
            throw new CustomError(400, "این شماره موبایل قبلا ثیت شده است")
        }
        next();
    }catch(err){
        next(err)
    }
}

const emailDuplication = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const email = await authModel.findOne({email : req.body.email})
        if(email){
            throw new CustomError(400, "این ایمیل قبلا ثیت شده است")
        }
        next();
    }catch(err){
        next(err)
    }
}

export {mobileDuplication, emailDuplication};