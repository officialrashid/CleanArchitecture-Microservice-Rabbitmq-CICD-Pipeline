
const orderController = (orderRepositoryInf,orderServiceInt,orderRepositoryImpl,orderServiceImp)=>{

    const orderDbRepository = orderRepositoryInf(orderRepositoryImpl())
    const orderService = orderServiceInt(orderServiceImp())
    const createOrder = (req,res) =>{

    }
    return{
        createOrder
    }
}
export default orderController;