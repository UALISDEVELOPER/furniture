import mongoConnector from "../DB/mongoConnector";

const PORT = process.env.PORT;

const appStarter = async (app:any) =>{
    console.log(`Worker ${process.pid} started`);

    
    await mongoConnector();


    app.listen(PORT, ()=>{
        console.log(`app on port : ${PORT}`);
    })
}

export default appStarter;