import mongoose from 'mongoose';
export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {});
        console.log('MongoDB conectado exitosamente');
    }catch (error) {
        console.log(`Error ${error.message}`);
    }
}