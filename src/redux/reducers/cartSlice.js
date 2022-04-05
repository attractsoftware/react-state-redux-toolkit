import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    itemCount: 0,
    totalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const cart = {...action.payload, total: action.payload.qty * action.payload.price};
            state.items.push(cart);
            state.itemCount = state.items.length;
            // let rowTotal = 0;
            // let tot = state.items.map(item => {
            //     rowTotal += item.price * item.qty;
            //     return rowTotal
            // });
            // state.totalAmount = tot[tot.length - 1]

            state.totalAmount = state.items.reduce((pre,cur) => pre + cur.total, 0);

        }
    }
});

export const { addCartItem } = cartSlice.actions;
export default  cartSlice.reducer;