import express , {NextFunction , Request ,Response} from "express";

import cors from "cors";
import helmet from "helmet";

// =================
import { errorController } from "../app/http/request/error/errorHandller";
import { errorHandller404 } from "../app/http/request/error/errorHandller";

import authRoutes from "../routes/auth";

const appWrapper = (app: any) =>{
    app.use(express.urlencoded({extended : false}));
    app.use(express.json());
    // app.use(cors);
    // app.use(helmet());


    //=== routers ===

    app.use("/api/auth", authRoutes);


    // === error handllers ====
    app.use(errorController)
    app.use("*", errorHandller404)

}


export default appWrapper;