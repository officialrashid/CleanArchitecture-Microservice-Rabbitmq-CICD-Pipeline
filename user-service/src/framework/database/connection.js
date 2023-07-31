import mongoose from "mongoose";
//set the mongodb connection
mongoose.set("strictQuery", true);

const connectDB = async (config) => {
  try {
    await mongoose.connect(config.mongo.uri);
   
  } catch (error) {

    process.exit(1);
  }
};

export default connectDB;