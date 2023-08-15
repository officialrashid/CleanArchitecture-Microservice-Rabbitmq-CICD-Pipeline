//import usecase functions//
import registerUser from '../../../application/usecase/user/register.js'
import loginUser from '../../../application/usecase/user/login.js'
const authController = (userRepositoryInt,userRepositoryImp,userServiceInt,userServiceImp)=>{

     /// assign dbRepository to userRepositiryInt and userRepositoryImp//

    const dbRepository = userRepositoryInt(userRepositoryImp())
    const authService = userServiceInt(userServiceImp())

    const createUser = async (req, res) => {
    console.log("bbfbfbj111111111",req.body);
      const { name,email,password } = req.body; //getting data from router

      try {
        //call the usecase  register function //
          await registerUser(name,email,password,dbRepository,authService).then((response)=>{
            console.log(response,"response in controller ethi ttaaa");
            res.status(200).json(response);
          })
         
      } catch (error) {
          res.status(500).json({ error: "Something went wrong" });
      }
  };
  const login= async (req,res) =>{
     const {email,password} = req.body
     console.log(email,password,"controller in the login");
     try{
        
      await loginUser(email,password,dbRepository,authService).then((response)=>{
        res.status(200).json(response)
      })

     } catch(error){
       console.log(error,"error in the login function");
     }
  }
  
   return {
    createUser,
    login
   }
}

export default authController