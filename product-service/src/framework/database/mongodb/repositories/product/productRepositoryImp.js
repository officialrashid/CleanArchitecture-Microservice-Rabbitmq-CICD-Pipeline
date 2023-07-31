import amqp from "amqplib";
import productDatas from "../../../mongodb/models/productModels/productModels.js";

const productRepositoryImp = () => {
  const addedProduct = async (productData) => {
    try {
      const product = new productDatas({
        productName: productData?.getProductName(),
        category: productData?.getCategory(),
        price: productData?.getPrice(),
        discription: productData?.getDiscription(),
      });

      return await product.save();
    } catch (error) {
      console.error("Error in addedProduct:", error);
      throw error; // Rethrow the error to be handled in the calling function
    }
  };

  const orderedProducts = async (productId, userId) => {
    try {
      console.log(productId, userId, "user implement buy productsss");
      const products = await productDatas.find({ _id: { $in: productId } });
      console.log(products, "ppppppppppppppppp");

      const connection = await amqp.connect("amqp://rabbitmq:5672");
      const channel = await connection.createChannel();

      await channel.assertQueue("ORDER");

      // Create a Promise to handle the asynchronous RabbitMQ response
      const orderPromise = new Promise((resolve, reject) => {
        // Set up a callback for the consume event
        channel.consume("PRODUCT", (data) => {
          console.log("consuming product in the order consuming to product consuming");
          const order = JSON.parse(data.content);
          resolve(order); // Resolve the Promise with the order data
        });
      });

      channel.sendToQueue(
        "ORDER",
        Buffer.from(
          JSON.stringify({
            products,
            userId: userId,
          })
        )
      );

      // Wait for the Promise to resolve with the order data
      const order = await orderPromise;
      return order;
    } catch (error) {
      console.error("Error in orderedProducts:", error);
      throw error; // Rethrow the error to be handled in the calling function
    }
  };

  return {
    addedProduct,
    orderedProducts,
  };
};

export default productRepositoryImp;
