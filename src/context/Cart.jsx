import React, { createContext, useContext, useState } from "react";

 export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

export const CartProvider = ({ children }) => {

    const  [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);

    }

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    }


    
  return <CartContext.Provider value={{cart,  addToCart, removeFromCart}}>
    {children}
  </CartContext.Provider>;
};

export const useCart = () => {
    return useContext(CartContext);
}
