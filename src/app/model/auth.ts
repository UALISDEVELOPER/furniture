import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    storeName : {type : String, required: true},
    mobile : {type : Number, required : true},
    name : {type : String , required : true},
    email : {type : String , required : true},
    password : {type : String , required : true},
    dateCreated : {type : Date, required : true}
})

const authModel = mongoose.model("user", authSchema);

export {authModel};