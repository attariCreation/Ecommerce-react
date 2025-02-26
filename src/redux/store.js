import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import LoginReducer from './loginSlice'
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root', 
    storage
}
 const persistedLoginReducer = persistReducer(persistConfig, LoginReducer);
 const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        login: persistedLoginReducer, 
    }, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Needed for Redux Persist
        }),
})
const persistor = persistStore(store)
export default store;
export {persistor}