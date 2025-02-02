import React from "react";
export const getUser = async () => {
  
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  
};
export const getUserById = async (id) => {
 
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
};
