/*This the centralised area we have stored all the slices data.
As we already have knowledge that a store is made up of a collection of slices.
This store is only passed as prop inside the provider tag of redux.


What we actual store inside the store is the reducer the slice being creted.

(i) cofigureStore is used for creating store in the redux.

syntax :- store = configureStore({
        reducer:{
            <slice-name>:<reducer or function-name or slice-function-name> (all are just same).
*/

import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slice/CounterSlice";

export const store = configureStore({
    reducer:{
        counter:CounterSlice
    }
});

