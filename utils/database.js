import mongoose from "mongoose";

// Due to next js routes being serverless. We need to keep track of the connection to the database.
let isConnected = false

export const  connectToDB = async () =>{
    mongoose.set('strictQuery',true)
    if(isConnected){  
        return;
    }
    mongoose.connect(process.env.MONGO_URL,{
        dbName : "share_prompt",
        useUnifiedTopology : true
    })
    isConnected = true
    console.log("DB connected");
}