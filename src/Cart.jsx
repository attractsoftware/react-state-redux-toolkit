import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "./redux/reducers/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    return (
        <div>
            <p>{JSON.stringify(cart.items)}</p>
            <button onClick={() => dispatch(addCartItem({id: 1, qty: 1, price: 250}))}>Add Apple</button>
            <button onClick={() => dispatch(addCartItem({id: 2, qty: 3, price: 270}))}>Add Orange</button>
            <button onClick={() => dispatch(addCartItem({id: 3, qty: 5, price: 220}))}>Add Carrot</button>
        </div>
    );
};

export default Cart;