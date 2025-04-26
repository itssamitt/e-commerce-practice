import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addtocart(state, action) {
            let isexist = state.value.find((item) => item.id === action.payload.id)
            if (isexist) {
                isexist.quantity += 1
                isexist.amount += action.payload.price
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                    amount: action.payload.price
                };
                state.value.push(newItem)
            }
        },
        decrease(state, action) {
            let thatproduct = state.value.find((item)=> item.id === action.payload.id)
            if(thatproduct.quantity >1){
                thatproduct.quantity -= 1
                thatproduct.amount -=thatproduct.price
            }
            else{
                state.value = state.value.filter((item)=> item.id !== action.payload.id )
            }
        },
        deleteCart(state, action){
            state.value = state.value.filter((item)=> item.id !== action.payload.id)
        }
    }
})

export const { addtocart, decrease, deleteCart } = cartslice.actions

export default cartslice.reducer