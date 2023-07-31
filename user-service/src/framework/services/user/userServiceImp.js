import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../../config/config.js'
const userServiceImp = () => {
    
    const bycriptPassword = async (password) => {  //passwod bcrypt function
       console.log(password, "password is coming");
       const salt = await bcrypt.genSalt(10); //generate the 10 gesalt
       const hashPassword = await bcrypt.hash(password, salt); // password bcrypt success
       console.log(hashPassword, "hashpassword is coming");
       return hashPassword;
    };
    return {
       bycriptPassword,
       
    };
 };
 export default userServiceImp