import mongoose from "mongoose";

//set the userSchema//
const orderSchema = new mongoose.Schema({
  products: [
    {
        productId:String
    }
  ],
userId:String,
totalPrice:Number,
created_at:{
    type:Date,
    default:Date.now()
}
});

const orderData = mongoose.model("order", orderSchema); // Set the collection name to "user"

export default orderData;