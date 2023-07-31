// serverConfig.js
const serverConfig = (server, config) => {
    const startServer = () => {
      server.listen(config.port, () => {
        console.log(`Server listening on port 3000 - userService`);
      });
    };
  
    return {
      startServer,
    };
  };
  
  export default serverConfig;
  
  