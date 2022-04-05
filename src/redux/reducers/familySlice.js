import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'family',
    initialState: {
        GFather: 'Somasundaram',
        father: 'Chinnaiyan',
        son: 'Ravindran',
        count:0,
        count2:0,
        qty:0,
        price:0,
        total:0

    },
    reducers:{
        incCount:(state,action) => {
            //state.count +=1;
            /*state.count2+=action.payload;*/
            // state.qty=action.payload.qty;
            // state.price=action.payload.price;
            // state.total +=action.payload.qty*action.payload.price;

            return {
                ...state,
                count: state.count + 1,
                qty: state.qty + action.payload.qty,
                price: action.payload.price,
                total: action.payload.qty * action.payload.price,
            }
        }
    }
});


export const {incCount} = userSlice.actions;

export default userSlice.reducer;