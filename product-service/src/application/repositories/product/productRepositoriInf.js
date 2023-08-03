

const productRepositoryInf = (repository) =>{
   
    const addedProduct = (productData) => repository.addedProduct(productData)
    const orderedProducts = (productId,userId) => repository.orderedProducts(productId,userId)
    return{
        addedProduct,
        orderedProducts
    }
}
export default productRepositoryInf