import {NextFunction, Request, Response} from "express"

import {authModel} from "../../model/auth"

const registerController = (req: Request, res: Response, next: NextFunction)=>{
    const {email , name , mobile , storeName} = req.body;
    const hashedPassword = req.body.hashedPass

    try{
        const newUser = new authModel({
            email: email,
            name : name,
            mobile : mobile,
            storeName : storeName,
            password : hashedPassword,
            dateCreated : new Date().getTime()
        })
        try{
            newUser.save()
                res.status(200).json({
                    message : "حساب کاربری با موفقیت ساخته شد",
                    status : 200,
                })
        }catch(err){
            next(err)
        }
    }catch(err){
        next(err)
    }
}

export {registerController};