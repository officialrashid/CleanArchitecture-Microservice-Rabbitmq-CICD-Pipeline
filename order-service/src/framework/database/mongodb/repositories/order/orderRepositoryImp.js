import orderData from "../../models/orderModels/orderModels.js";
const orderRepositoryImp = () =>{

   const createOrder = async (products,userId,address,total) =>{
    console.log(total,";;;;;;;;;");
    console.log(userId,"userid in implements");
    console.log(products,"products in implementsssss");
    console.log(address,"products in implementsssss");
    const newOrder = new orderData({
              products,
              userId:userId,
              address:address,
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