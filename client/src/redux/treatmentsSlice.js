
import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: 1,
        name: "manikura"
      },
      {
        id: 2,
        name: "pedikura"
      },
      {
        id: 3,
        name: "masaza"
      },
      {
        id: 4,
        name: "frizura"
      },
];

export const treatmentsSlice = createSlice ({
    name: 'treatments',
    initialState,
    reducers:{
        FETCH_ALL_TREATMENTS: (state, action) => {
        console.log('dosao na reducer i pokupio ga');
        console.log(state.treatments);
        return action.payload;
    }
    
    } 
});

export const {FETCH_ALL_TREATMENTS} = treatmentsSlice.actions;

export default treatmentsSlice.reducer;

