import productController from "../../../../adaptors/controller/product/productController.js"
import productRepositoryInf from "../../../../application/repositories/product/productRepositoriInf.js"
import productServiceInt from "../../../../application/services/product/productServiceInf.js"
import productRepositoryImpl from "../../../../framework/database/mongodb/repositories/product/productRepositoryImp.js"
import productServiceImp from "../../../../framework/services/product/productServiceImp.js"


const productRouter=(express)=>{

    const router = express.Router()
    
    const productsController = productController(productRepositoryInf,productServiceInt,productRepositoryImpl,productServiceImp)
     //call the register api
    router.route('/addProduct').post(productsController.addProduct)
    router.route('/buyProduct').post(productsController.buyProduct)
    return router
}

export default productRouter