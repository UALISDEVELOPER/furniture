import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL;

const mongoConnector =async ()=>{
    
    await mongoose.connect(`${mongoURL}`)
        .then(()=>{
            console.log("mongo db connected");
        })
        .catch(err=>{
            console.log(err);
        })

}

export default mongoConnector ;