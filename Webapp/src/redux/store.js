import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./slices/AuthenticationSlice";
import countSlice from "./slices/complexSlice";
import complexSlice from "./slices/complexSlice";

export const store = configureStore({
  reducer: {
    authentication: AuthenticationSlice,
    count: countSlice,
    complex: complexSlice,
  },
});
