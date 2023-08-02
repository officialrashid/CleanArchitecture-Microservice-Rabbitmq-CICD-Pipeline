
const getAllProduct = async (repositories, productService) => {
    try {
      const products = await repositories.getAllProduct();
      console.log(products, "response in the use case");
      return { status: true, products: products };
    } catch (error) {
      console.error("Error in getAllProduct use case:", error);
      return { status: false, message: "Failed to retrieve products" };
    }
  };
  

export default getAllProduct;