import {check} from "express-validator"

const registerSanitization = [
    check("storeName")
        .notEmpty()
        .withMessage("نام فروشگاه خود را وارد کنید")
        .isLength({min: 2, max : 15})
        .withMessage("یک نام معتبر وارد کنید")
        .isString()
        .withMessage("store name must be string"),
    check("mobile")
        .notEmpty()
        .withMessage("شماره همراه خود را وارد کنید")
        .isLength({min: 11, max : 11})
        .withMessage("یک شماره موبایل معتبر وارد کنید")
        .isNumeric()
        .withMessage("phone number must be number"),
    check("name")
        .notEmpty()
        .withMessage("نام خود را وارد کنید")
        .isLength({min: 3, max : 15})
        .withMessage("یک نام معتبر وارد کنید")
        .isString()
        .withMessage("name must be string"),
    check("email")
        .notEmpty()
        .withMessage("ایمیل را وارد کنید")
        .isEmail()
        .withMessage("یک ایمیل معتبر وارد کنید"),
    check("password")
        .notEmpty()
        .withMessage("رمز ورود را وارد کنید")
        .isAlphanumeric("en-US")
        .withMessage("رمز عبور باید شامل ترکیبی از اعداد و حروف باشد")
        .isLength({min: 8})
        .withMessage("‍‍‍رمز عبور باید حداقل ۸ کاراکتر باشد"),
]

export {registerSanitization};