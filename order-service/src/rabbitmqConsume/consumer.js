import amqp from 'amqplib';
import createOrder from '../application/usecase/order/createOrder.js';
import orderRepositoriInf from '../application/repositories/order/orderRepositoriInf.js';
import orderRepositoryImp from '../framework/database/mongodb/repositories/order/orderRepositoryImp.js';

const orderDbRepository = orderRepositoriInf(orderRepositoryImp());

const connect = async () => {
  try {
    const amqpServer = 'amqp://rabbitmq:5672'; // Update with RabbitMQ container name and port
    const connection = await amqp.connect(amqpServer);
    const channel = await connection.createChannel();
    await channel.assertQueue('ORDER');
    console.log('Connected to RabbitMQ');
    return channel; // Return the channel object
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
  }
};

const consumeOrderQueue = async () => {
  try {
    const channel = await connect();
    console.log('Order service connected to RabbitMQ');

    channel.consume('ORDER', async (data) => {
      if (!data) return; // Handle the case where the message is empty or invalid
      const { products, userId } = JSON.parse(data.content);

      console.log('Consuming order queue');
      console.log(products, 'Products received from queue');
      console.log(userId, 'User ID received from queue');

      try {
        const newOrder = await createOrder(products, userId, orderDbRepository);
        console.log('Order created:', newOrder);

        channel.ack(data); // Acknowledge the message after successful processing
        channel.sendToQueue('PRODUCT', Buffer.from(JSON.stringify({ newOrder }))); // Publish message to another queue
      } catch (error) {
        console.log('Error creating order:', error);
        // Handle the error gracefully or take appropriate actions
      }
    });
  } catch (error) {
    console.error('Error consuming order queue:', error);
  }
};

consumeOrderQueue().catch((error) => {
  console.error('Error in consumeOrderQueue:', error);
});
