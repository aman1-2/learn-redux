/*Here we have created a slice as CouterSlice

(i) We can create a slice with the help of createSlice Hook.It includes three parameters
which describes the slice detail and its functionality.
    (1)name of the slice
    (2)intialState
    (3)reducres-> the function to be imported from the slice 
Syntax :- <Slice_name>=createSlice({{here a object will be defined}
name:<Slice_name},
initialState,
reducer:{this will too contain object of function and its implementation}{
    <function-name>:()=>{},->function name and arrow function for function description.
})

(ii) At the end we just have to export the functions and the counterSlice reducer seperately.
*/

import { createSlice } from '@reduxjs/toolkit'

const initialState={value:0};

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state)=>{state.value+=1},
        decrement: (state)=>{state.value-=1},
        reset: (state)=>{state.value=0}
    }
});

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;