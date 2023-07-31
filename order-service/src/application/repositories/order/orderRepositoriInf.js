
const orderRepositoriInf = (repository) =>{

    const createOrder = (products,userId,total) => repository.createOrder(products,userId,total)
   return{
    createOrder,
   }
} 

export default orderRepositoriInf;