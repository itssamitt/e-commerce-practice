import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import filterReducer from './FilterSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter : filterReducer
    }
});
