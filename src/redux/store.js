import { configureStore } from '@reduxjs/toolkit'

import familRedcer from './reducers/familySlice'
import cartReducer from './reducers/cartSlice'

const store = configureStore({
    reducer: {
        family: familRedcer,
        cart: cartReducer
    },
});

export default store;