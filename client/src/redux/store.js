import { configureStore } from "@reduxjs/toolkit";
import treatmentsReducer from "./treatmentsSlice";

export const store = configureStore( {
    reducer:{
        treatments: treatmentsReducer
    } ,
})