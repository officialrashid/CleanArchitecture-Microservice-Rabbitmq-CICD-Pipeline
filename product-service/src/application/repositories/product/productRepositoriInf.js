

const productRepositoryInf = (repository) =>{
   
    const addedProduct = (productData) => repository.addedProduct(productData)
    const orderedProducts = (productId,userId,address) => repository.orderedProducts(productId,userId,address)
    const getProducts = () => repository.getProducts()
    const productDetails = (productId) => repository.productDetails(productId)
    return{
        addedProduct,
        orderedProducts,
        getProducts,
        productDetails
    }
}
export default productRepositoryInf