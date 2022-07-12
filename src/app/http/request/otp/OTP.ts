import {NextFunction, Request, Response} from "express"


const kovenegar_key = process.env.kavenegar_key;

const sendOTP = async(req: Request, res: Response, next: NextFunction) =>{
    try{
        var Kavenegar = require('kavenegar');
        var api = Kavenegar.KavenegarApi({
            apikey: `${kovenegar_key}`
        });
        api.Send({
                message: "2525545 your code is",
                sender: "2000500666",
                receptor: "09102778287"
            },
            function(response: any, status: any) {
                console.log(response);
                console.log(status);
            });
            next();
    }catch(err){
        next(err)
    }
}

export {sendOTP};