import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from '../cake/cakeSlice'
const initialState ={
    numOfIceCreame :20
}
const iceCreameSlice=createSlice({
    name:'icecreame',
    initialState,
    reducers :{
        ordered : (state)=>{
            state.numOfIceCreame--

        },
        restcoked :(state,action)=>{
            state.numOfIceCreame +=action.payload

        },
    },
    // extraReducers :{
    //     ['cake/ordered'] :(state) =>{
    //         state.numOfIceCreame--
    //     }
    // }
    extraReducers :(builder)=>{
        builder.addCase(cakeOrdered,(state)=>{
            state.numOfIceCreame--
        })
    }
})
export const {ordered,restcoked} =iceCreameSlice.actions
export default iceCreameSlice.reducer