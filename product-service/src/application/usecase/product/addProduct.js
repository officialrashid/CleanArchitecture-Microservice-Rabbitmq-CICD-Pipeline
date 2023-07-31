import productdata from "../../../entities/product/productEntities.js"
const addedProduct = async (productName,category,price,discription,repositories,productService) =>{

    try {
        const producData = productdata(productName,category,price,discription)
        const product =  await repositories.addedProduct(producData)

        return ({status:true,product})
         
    } catch (error){
       console.log(error,"error in the usecase added product");
    }

}
export default addedProduct