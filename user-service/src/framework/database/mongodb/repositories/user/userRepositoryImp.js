import userData from '../../../mongodb/models/userModels/userModels.js'
const userRepositoryImp = () =>{

    const userExist = async(email) => await userData.findOne({email:email})//check the email exist in the database
    // add user detail in to the user database
    const createUser = async (user) =>{
   
        const users =  await new userData({
            name: user?.getname(),
            email: user?.getemail(),
            password: user?.getpassword()
        })
        console.log(users,"llllllllll");
        return users.save() //user details save success

    }
    return{

        userExist,
        createUser
    }
}

export default userRepositoryImp