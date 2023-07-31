import orderController from "../../../../adaptors/controller/order/orderController.js"
import orderRepositoryInf from "../../../../application/repositories/order/orderRepositoriInf.js"
import orderServiceInt from "../../../../application/services/order/orderServiceInf.js"
import orderRepositoryImpl from "../../../../framework/database/mongodb/repositories/order/orderRepositoryImp.js"
import orderServiceImp from "../../../../framework/services/order/orderServiceImp.js"


const orderRouter=(express)=>{

    const router = express.Router()
    
    const ordersController = orderController(orderRepositoryInf,orderServiceInt,orderRepositoryImpl,orderServiceImp)
     //call the register api
     router.route('createOrder').post(ordersController.createOrder)
    
    return router
}

export default orderRouter