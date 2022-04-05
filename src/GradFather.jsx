import React from 'react';
import { useSelector} from "react-redux";
import Father from "./Father";

const GradFather = () => {
    const family = useSelector(state => state.family);
    console.log(family);
    return (
        <div>

            <h1>Father Name {family.GFather}</h1>
            <Father/>
        </div>
    );
};

export default GradFather;