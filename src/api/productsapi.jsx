export const getUser = async () => {
  
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  
};
export const getUserById = async (id) => {
    try{
         
    const response = await fetch(`https://fakestoreapi.com/products/${id + 1}`);
    const data = await response.json();
    console.log("Fetched product data:", data)
    return data;

    }catch(error) {
        console.log(error.message)
    }
};