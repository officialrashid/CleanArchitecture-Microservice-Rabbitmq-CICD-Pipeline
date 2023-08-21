
const getOrderDetails = async (repositories,orderService) =>{
    
    try{
       
       const response = await repositories.getOrderDetails()
       return { status: true, orders: response };
        
    } catch(error){
        console.log(error,"error in the get order details");
    }

}
 export default getOrderDetails