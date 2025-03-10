import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IinitialState {
    products: IProduct[];
}

const initialState: IinitialState = {
    products: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {

            // const productToAdd = state.products.find()

            state.products.push(action.payload);
        }
    },
});

export const orderedProductsSelector = (state: RootState) => {
    return state.cart.products;
};

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;