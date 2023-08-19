
import addedProduct from "../../..//application/usecase/product/addProduct.js"
import orderProducts from "../../../application/usecase/product/orderProducts.js"
import getProducts from "../../../application/usecase/product/getProducts.js"
import productDetails from "../../../application/usecase/product/productDetails.js"
const productController = (productRepositoryInf,productServiceInf,productRepositoryImp,productServiceImp) =>{
  
const productDbRepository = productRepositoryInf(productRepositoryImp())
const productService =  productServiceInf(productServiceImp())

const addProduct = async (req,res) =>{
  console.log(req.body,"[[[[[]]][[[]]][[[]]][[]]");
    const {productName,category,price,description,image} = req.body
   try {

      await addedProduct(productName,category,price,description,image,productDbRepository,productService).then((response)=>{

        res.status(200).json(response)
      })
   } catch (error) {
      res.status(500).json({error:"something went to wrong"})
   }
  
}
const buyProduct =  async (req,res)=>{
console.log(req.body,"::::::::::::::::::::;;:::;");
    const {ids,userId,address} = req.body 

  try{

   await orderProducts(ids,userId,address,productDbRepository,productService).then((response)=>{
     
    res.status(200).json(response)

   })


  } catch(error){
    res.status(500).json({error:"buy product something error"})
  }

}
const getAllProduct = async (req,res) =>{
   console.log("get all product api success");
  try{
      
   await getProducts(productDbRepository,productService).then((products)=>{
      console.log(products,"get all produdts in the controll");
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(products);

   })

  } catch(error){
    console.log(error,"error in the get all product");
  }

}
const getProductDetails = async (req, res) => {
  console.log(req.params.id, "PpppppppppPPPPPP");
  const id = req.params.id;
  try {
      const response = await productDetails(id, productDbRepository, productService);
      if (response) {
          console.log(response, "response product detail controller ethitta");
          res.status(200).json(response);
      }
  } catch (error) {
      console.log(error, "error in the product Detail controller");
      res.status(500).json({ error: "Internal server error" });
  }
};

return {
    addProduct,
    buyProduct,
    getAllProduct,
    getProductDetails
}

}
export default productController