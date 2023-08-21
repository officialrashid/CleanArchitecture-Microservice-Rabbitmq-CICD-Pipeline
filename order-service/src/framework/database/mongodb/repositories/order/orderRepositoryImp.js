import orderData from "../../models/orderModels/orderModels.js";

const orderRepositoryImp = () => {
  const createOrder = async (products, userId, address, total) => {
    console.log(total, ";;;;;;;;;");
    console.log(userId, "userid in implements");
    console.log(products, "products in implementsssss");
    console.log(address, "address in implementsssss");

    const newOrder = new orderData({
      products,
      userId: userId,
      address: address,
      totalPrice: total,
    });

    await newOrder.save();
    return newOrder;
  };

  const getOrderDetails = async () => {
    try {
      const orders = await orderData.find();
      return orders;
    } catch (error) {
      console.error("Error in getOrders:", error);
      throw error;
    }
  };

  return {
    createOrder,
    getOrderDetails,
  };
};

export default orderRepositoryImp;
