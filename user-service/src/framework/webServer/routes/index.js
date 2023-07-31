import authRouter from "./user/userAuth.js"

const routes=(app,express) =>{
   
    app.use('/api/v1/user',authRouter(express))
  
}
export default routes