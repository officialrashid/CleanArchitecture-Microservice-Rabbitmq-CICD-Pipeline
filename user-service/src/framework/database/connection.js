import mongoose from "mongoose";
//set the mongodb connection
mongoose.set("strictQuery", true);

const connectDB = async (config) => {
  try {
    await mongoose.connect(config.mongo.uri);
   console.log("connected db user-service");
  } catch (error) {

    process.exit(1);
  }
};

export default connectDB;