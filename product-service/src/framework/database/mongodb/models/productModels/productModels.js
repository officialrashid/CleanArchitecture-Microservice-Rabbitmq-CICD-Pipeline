import mongoose from "mongoose";

//set the userSchema//
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    
  },
  category: {
    type: String,

  },
  price: {
    type: Number,
  },
  description: {
    type: String
  },
  image:{
    type: String
  }

});

const productData = mongoose.model("product", productSchema); // Set the collection name to "user"

export default productData;