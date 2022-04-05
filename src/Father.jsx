import React from 'react';
import Son from "./Son";
import {useSelector} from "react-redux";

const Father = () => {
    const family = useSelector(state => state.family);
    return (
        <div>
          <h2>  Father Name : {family.father} </h2>
            <Son />
        </div>
    );
};

export default Father;