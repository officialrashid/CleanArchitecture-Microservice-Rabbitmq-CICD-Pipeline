import productdata from "../../../entities/product/productEntities.js"
const addedProduct = async (productName,category,price,description,image,repositories,productService) =>{

    try {
        const producData = productdata(productName,category,price,description,image)
        const product =  await repositories.addedProduct(producData)

        return ({status:true,product,success:true})
         
    } catch (error){
       console.log(error,"error in the usecase added product");
    }

}
export default addedProduct