import "../../rabbitmqConsume/consumer.js"
const serverConfig = (server, config) => {
  const startServer = () => {
    server.listen(config.port, () => {
      console.log(`Server listening on port 4000 product-service`);
    });
  };

  return {
    startServer
  };
};

export default serverConfig;
