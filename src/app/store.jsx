import { configureStore } from "@reduxjs/toolkit";
import pegawaiReducer from "../features/counter/pegawaiSlice";

export const store = configureStore({
  reducer: {
    pegawai: pegawaiReducer,
    
  },
});
