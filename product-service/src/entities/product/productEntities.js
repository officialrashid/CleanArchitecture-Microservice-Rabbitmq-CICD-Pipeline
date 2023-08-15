const productdata=(productName,category,price,description,image) =>{
    //set the userDetail entities //
        return {
    
            getProductName:() =>productName,
            getCategory:()=>category,
            getPrice:()=>price,
            getDescription:()=>description,
            getImage:()=>image
          
        }
    }
    export default productdata