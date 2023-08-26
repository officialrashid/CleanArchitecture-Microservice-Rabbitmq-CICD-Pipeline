
const loginUser = async (email,password,repositories,authService) =>{
    console.log(email,password,"coming to the login usecase");
    return repositories.userExist(email).then(async (user) => {
        console.log(user,"oooooooooooooo9988998898989");
        if (user.email && user.password) {
          return authService.ComparePassword(password, user.password).then(async (isPassword) => {
         
            if (isPassword) {

              const userdata ={
                  
                _id : user._id,
                name:user.name,
                email:user.email
  
              }
              const accessToken = await authService.createAccessToken(userdata)
          
            console.log(accessToken,"accessToken in loginnnnnnnn");
         
              return ({ status:true,accessToken:accessToken,userInfo:userdata});
            } else {
              return { status: false };
            }
          });
        } else {
          return { message: "Invalid email or password", status: false };
        }
      });
}

export default loginUser