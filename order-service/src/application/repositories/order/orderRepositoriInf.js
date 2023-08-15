
const orderRepositoriInf = (repository) =>{

    const createOrder = (products,userId,address,total) => repository.createOrder(products,userId,address,total)
   return{
    createOrder,
   }
} 

export default orderRepositoriInf;