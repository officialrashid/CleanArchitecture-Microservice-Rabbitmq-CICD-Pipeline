import getOrderDetails from "../../../application/usecase/order/getOrder.js"
const orderController = (orderRepositoryInf,orderServiceInt,orderRepositoryImpl,orderServiceImp)=>{

    const orderDbRepository = orderRepositoryInf(orderRepositoryImpl())
    const orderService = orderServiceInt(orderServiceImp())
    const createOrder = (req,res) =>{

    }
    const getOrder = async (req, res) =>{

        try{
           
          await getOrderDetails(orderDbRepository,orderService).then((response)=>{

            res.status(200).json(response)

          }).catch((error)=>{
            console.log(error,"error in the getOrderDetails function connect to the usecase");
          }) 

        } catch(error){
            console.log(error,"error in the get order controller function");
        }
    }
    return{
        createOrder,
        getOrder
    }
}
export default orderController;