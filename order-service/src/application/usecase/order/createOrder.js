const createOrder = async (products, userId, repositories) => {
    let total = 0; // Initialize total to zero
  
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
  
    const orders = await repositories.createOrder(products, userId, total);
  
    if (orders) {
      console.log("Success: Order created successfully");
      return { status: true, orders: orders };
    } else {
      console.log("Error: Failed to create order");
      return { status: false, orders: null };
    }
  };
  
  export default createOrder;
  