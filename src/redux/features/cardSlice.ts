import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    products : IProduct[];
}

const initialState : IinitialState = {
    products : []
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {},
});


export default cartSlice.reducer;