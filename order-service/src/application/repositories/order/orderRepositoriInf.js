
const orderRepositoriInf = (repository) =>{

    const createOrder = (products,userId,address,total) => repository.createOrder(products,userId,address,total)
    const getOrderDetails = () => repository.getOrderDetails()
   return{
    createOrder,
    getOrderDetails
   }
} 

export default orderRepositoriInf;