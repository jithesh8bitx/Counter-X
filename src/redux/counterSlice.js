import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterApp",
  initialState: {
    value: 0,
  },
  //actions are created inside this reducers key as object
  reducers: {
    //logics to update state

    //function to increment number
    increment: (state, action) => {
      state.value += action.payload
    },

    //function to decrement number
    decrement: (state, action) => {
      state.value -= action.payload;
    },

    //function to reset
    reset: (state) => {
      state.value = 0;
    },
  },
});

//action is required by component in order to update state
export const { increment, decrement, reset } = counterSlice.actions;

//reducer is required to store to change the state value
export default counterSlice.reducer;
