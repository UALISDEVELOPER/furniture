import express from "express";
const router = express.Router();


import { hashPass } from "../tools/hashPass";
import {mobileDuplication} from "../app/http/request/middleware/emailAndMobileDuplication"
import {emailDuplication} from "../app/http/request/middleware/emailAndMobileDuplication"
import { sendOTP } from "../app/http/request/otp/OTP";
import { otpController } from "../app/http/controller/otpController";
import {registerSanitization} from "../app/http/request/validator/authSanitazer";
import {sanitizationErrorHandller} from "../app/http/request/error/errorHandller"
import {registerController} from "../app/http/controller/authController"


router.post("/otp", 
    sendOTP,
    otpController
)


router.post("/register", 
    registerSanitization,
    sanitizationErrorHandller,
    mobileDuplication,
    emailDuplication,
    hashPass,
    registerController
)





export default router;