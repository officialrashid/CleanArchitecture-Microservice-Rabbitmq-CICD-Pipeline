import bcrypt from 'bcryptjs'

const userServiceImp = () => {
    
    const bycriptPassword = async (password) => {  //passwod bcrypt function
       console.log(password, "password is coming");
       const salt = await bcrypt.genSaltSync(10); //generate the 10 gesalt
       const hashPassword = await bcrypt.hashSync(password, salt); // password bcrypt success
       console.log(hashPassword, "hashpassword is coming");
       return hashPassword;
    };
    return {
       bycriptPassword,
       
    };
 };
 export default userServiceImp