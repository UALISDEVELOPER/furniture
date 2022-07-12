import {validationResult} from "express-validator"
import {NextFunction, Request, Response} from "express"


import { CustomError } from "./customError";

const errorController = (error:Error , req: Request, res: Response, next: NextFunction) => {
    const status = 500;

    res.status(status).json({
        hasError : true,
        message : error.message,
        trackId : new Date().getTime(),
        status : status
    })
     
}

const errorHandller404 = (req: Request, res: Response, next: NextFunction)=>{
    res.status(404).json({
        hasError : true,
        message : "this URL is not found (404)!!",
        trackId : new Date().getTime()
    })
}

const sanitizationErrorHandller = (req: Request, res: Response, next: NextFunction) =>{
    try{
        const result = validationResult(req);
        if (!(result.isEmpty())) {
            throw new CustomError(422, result.array()[0])
        }
        next();
    }catch(err){
        next(err)
    }
}

export {errorController, errorHandller404, sanitizationErrorHandller};