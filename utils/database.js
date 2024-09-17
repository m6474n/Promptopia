import mongoose from "mongoose";

let isConnected = false;
export const connectDB = async()=>{

    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log(
            'database is already connected!.'
        );
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'share_prompts',

        });
        isConnected = true;
        console.log('MongoDB connected!');
    } catch (error) {
        console.log(error);
    }


} 