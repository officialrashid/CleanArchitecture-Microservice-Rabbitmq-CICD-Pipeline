
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async (config) => {
  try {
    await mongoose.connect(config.mongo.uri);
    console.log(`product Database connected successfully `);
  } catch (error) {
    console.log(error);
    process.exit(14);
  }
};



export default connectDB;