import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log("Error connecting to DB ", error.message);
  }
};

export { connectDB };
