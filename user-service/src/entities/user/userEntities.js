const userdata=(name,email,password) =>{
//set the userDetail entities //
    return {

        getname:() =>name,
        getemail:()=>email,
        getpassword:()=>password,
      
    }
}
export default userdata