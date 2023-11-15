import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
  //reducer can only update value of state in store
  //reducer key is predefined (object which can hold more than one reducer)
  reducer: {
    //reducer is comig from counterSlice since we export reducer as export default
    counter: counterSlice,
  },
});
