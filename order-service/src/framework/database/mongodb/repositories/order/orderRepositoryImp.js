import orderData from "../../models/orderModels/orderModels.js";
const orderRepositoryImp = () =>{

   const createOrder = async (products,userId,total) =>{
    console.log(total,";;;;;;;;;");
    console.log(userId,"userid in implements");
    console.log(products,"products in implementsssss");
    const newOrder = new orderData({
              products,
              userId:userId,
              totalPrice:total
          })
          newOrder.save()
            return newOrder;
   }
   return{
    createOrder
   }
}
export default orderRepositoryImp;