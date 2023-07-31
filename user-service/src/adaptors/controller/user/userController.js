//import usecase functions//
import registerUser from '../../../application/usecase/user/register.js'

const authController = (userRepositoryInt,userRepositoryImp,userServiceInt,userServiceImp)=>{

     /// assign dbRepository to userRepositiryInt and userRepositoryImp//

    const dbRepository = userRepositoryInt(userRepositoryImp())
    const authService = userServiceInt(userServiceImp())

    const createUser = async (req, res) => {
      const { name, email, password } = req.body; //getting data from router
      try {
        //call the usecase  register function //
          await registerUser(name, email, password, dbRepository, authService).then((response)=>{
            res.status(200).json(response);
          })
         
      } catch (error) {
          res.status(500).json({ error: "Something went wrong" });
      }
  };
  
   return {
    createUser
   }
}

export default authController