import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
        productnumber: 1
    },
    reducers: {
        addtocart(state, action) {
            let isexist = state.value.find((item) => item.id === action.payload.id)
            if (isexist) {
                isexist.quantity += state.productnumber
                isexist.amount += action.payload.price
                state.productnumber = 0
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: state.productnumber,
                    amount: action.payload.price
                };
                state.value.push(newItem)
                state.productnumber = 0
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
        },
        increasenumber(state, action){
            state.productnumber += 1
        },
        decreasenumber(state, action){
            state.productnumber -= 1
        }
    }
})

export const { addtocart, decrease, deleteCart, increasenumber, decreasenumber } = cartslice.actions

export default cartslice.reducer