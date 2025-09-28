import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
async function dbConnect() {
    try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected to DB ✅");
    }
    catch(err){
        console.log("Error connecting to DB❌");
    }
}
dbConnect()
export default dbConnect;