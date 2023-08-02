

const productRepositoryInf = async(repository) =>{
   
    const addedProduct = (productData) => repository.addedProduct(productData)
    const orderedProducts = (productId,userId) => repository.orderedProducts(productId,userId)
    const getAllProduct = () => repository.getAllProduct()
    return{
        addedProduct,
        orderedProducts,
        getAllProduct
    }
}
export default productRepositoryInf