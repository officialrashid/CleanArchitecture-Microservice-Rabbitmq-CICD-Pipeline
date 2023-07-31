
const userRepositoriInf = (repositories) =>{
    
    const userExist = (email) => repositories.userExist(email) // calling userRepositoryImp inside the userExist function
    const createUser = (user) => repositories.createUser(user) // calling userRepositoryImp inside the createUser function
    return{
        userExist,
        createUser
    }
}

export default userRepositoriInf