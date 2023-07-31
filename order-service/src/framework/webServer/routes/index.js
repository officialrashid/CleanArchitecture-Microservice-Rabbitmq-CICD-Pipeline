import orderRouter from "./order/orderRouter.js"
const routes=(app,express) =>{
   
    app.use('/api/v1/order',orderRouter(express))
}
export default routes