import bcrypt from 'bcryptjs'
import config from '../../../config/config.js';
import jwt from 'jsonwebtoken';
const userServiceImp = () => {
    
    const bycriptPassword = async (password) => {  //passwod bcrypt function
       console.log(password, "password is coming");
       const salt = await bcrypt.genSaltSync(10); //generate the 10 gesalt
       const hashPassword = await bcrypt.hashSync(password, salt); // password bcrypt success
       console.log(hashPassword, "hashpassword is coming");
       return hashPassword;
    };
   const createAccessToken = async (registerdUser)=>{
      const accessToken = jwt.sign(registerdUser, config.jwtAccessSecretKey, { expiresIn: '1d' })
      console.log(accessToken,"access token vanuu makkele");
      return accessToken
   } 
   const ComparePassword = async (password,userPassword) => bcrypt.compare(password,userPassword)
    return {
       bycriptPassword,
       createAccessToken,
       ComparePassword
       
    };
 };
 export default userServiceImp