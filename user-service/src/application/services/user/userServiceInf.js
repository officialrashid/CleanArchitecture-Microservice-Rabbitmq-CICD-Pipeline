
const userSeriviceInt = (repositories)=>{
console.log("Lllllll");
    const bycriptPassword = (password) => repositories.bycriptPassword(password) //calling userServiceImp inside the bycriptPassword function
    const createAccessToken = (registeredUser) => repositories.createAccessToken(registeredUser)
    const ComparePassword = (password,userPassword) => repositories.ComparePassword(password,userPassword)
    return{

        
        bycriptPassword,
        createAccessToken,
        ComparePassword
    }

}
export default userSeriviceInt