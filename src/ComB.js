import React, { useContext } from "react";
import ComC from "./ComC";
import { firstname,lastname, middlename } from "./App";
const ComB=()=>{
    const fname=useContext(firstname);
    const lname=useContext(lastname);
    const mname=useContext(middlename);
    return (
        <h1>
           {` my Name is ${fname} ${mname}${lname}`}
        </h1>
    )
}
export default ComB;