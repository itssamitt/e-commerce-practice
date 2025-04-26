import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        pricearray: [{
            rings: [
                {
                    start: 10000,
                    end: 20000
                },
                {
                    start: 30000,
                    end: 40000
                }
            ]
        },
        {
            anklet: [
                {
                    start: 10000,
                    end: 20000
                },
                {
                    start: 30000,
                    end: 40000
                }
            ]
        }]
    },
    reducers: {
        pricefilter(state, action) {
            const checking = state.pricearray.map((item)=>item)



            const newobj = {
                [action.payload.category] :[{
                    start : action.payload.start,
                    end : action.payload.end
                }]
            }
            state.pricearray.push(newobj)
        }
    },
});

export const { pricefilter } = filterSlice.actions;

export default filterSlice.reducer;
