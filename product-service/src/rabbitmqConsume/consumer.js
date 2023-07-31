import amqp from "amqplib"
var channel,connection;


const connect = async () => {
    try {
      const amqpServer = "amqp://rabbitmq:5672";
      connection = await amqp.connect(amqpServer);
      channel = await connection.createChannel();
      await channel.assertQueue("PRODUCT");
      console.log("Connected to RabbitMQ");
    } catch (error) {
      console.error("Error connecting to RabbitMQ:", error);
    }
  };
  
  connect();