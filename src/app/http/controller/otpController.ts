import {NextFunction, Request, Response} from "express"


const otpController = async(req: Request, res: Response, next: NextFunction) =>{
    try{
        res.status(200).json({
            message : "شماره موبایل با موفقیت ثبت شد",
            status : 200,
        })
    }catch(err){
        next(err)
    }
}

export {otpController}