
export default {
    port: 3000,
    
    mongo: {
      uri: 'mongodb+srv://muhammedrashi59:SUxzxasGOgEgKKPb@micro.1nbiei8.mongodb.net/clean-user?retryWrites=true&w=majority'
    },
    jwtAccessSecretKey:process.env.ACCESS_TOKEN_SECRET||'secretidofAccessTokenjwt',
  };
  console.log("first");