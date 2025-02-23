import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import LoginReducer from './loginSlice'
import LogoutReducer from "./loginSlice"
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: LoginReducer, 
        logout: LogoutReducer

    }
})
export default store;