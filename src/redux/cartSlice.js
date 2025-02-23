import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = {
        id: nanoid(),
        ...action.payload

      }
      
      state.cart.push(newProduct)
      console.log("new product ", newProduct)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((product) =>{
        product.id !== action.payload
        console.log(nanoid())
      }
      )
    },
    clearCart: (state) => {
      state.cart = []
    }

  }
})
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;