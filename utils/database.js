import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
