import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {incCount} from "./redux/reducers/familySlice";

const Son = () => {
    const family = useSelector(state => state.family);
    const dispatch=useDispatch()
    return (
        <div>
            <h3>Son name : {family.son} </h3>
            <h2>{family.count}</h2>
            <h2>{family.count2}</h2>
            <h4>{family.qty}</h4>
            <h4>{family.price}</h4>
            <h4>{family.total}</h4>
            <button onClick={()=>dispatch(incCount({qty:5,price:500}))} > Click </button>
        </div>
    );
};

export default Son;