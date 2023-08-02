
import { get } from "http"
import addedProduct from "../../..//application/usecase/product/addProduct.js"
import orderProducts from "../../../application/usecase/product/orderProducts.js"
import getAllProduct from "../../../application/usecase/product/getProduct.js"
import { response } from "express"
const productController = (productRepositoryInf,productServiceInf,productRepositoryImp,productServiceImp) =>{
  
const productDbRepository = productRepositoryInf(productRepositoryImp())
const productService =  productServiceInf(productServiceImp())

const addProduct = async (req,res) =>{
    const {productName,category,price,discription} = req.body
   try {

      await addedProduct(productName,category,price,discription,productDbRepository,productService).then((response)=>{

        res.status(200).json(response)
      })
   } catch (error) {
      res.status(500).json({error:"something went to wrong"})
   }
  
}
const buyProduct =  async (req,res)=>{

    const {ids,userId} = req.body 

  try{

   await orderProducts(ids,userId,productDbRepository,productService).then((response)=>{
     
    res.status(200).json(response)

   })


  } catch(error){
    res.status(500).json({error:"buy product something error"})
  }

}
const getProduct = async (req, res) => {
  console.log("controller kerottaaaa");
  try {  
    const response = await getAllProduct(productDbRepository, productService);
    console.log("response", response);
    res.send(response);
  } catch (error) {
    console.log("error in the get product", error);
    res.status(500).send("Internal Server Error");
  }
};

return {
    addProduct,
    buyProduct,
    getProduct 
}

}
export default productController