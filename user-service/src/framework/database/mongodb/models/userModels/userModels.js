import mongoose from "mongoose";

//set the userSchema//
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,

  },
  password: {
    type: String,
  },
});

const UserData = mongoose.model("User", userSchema); // Set the collection name to "user"

export default UserData;