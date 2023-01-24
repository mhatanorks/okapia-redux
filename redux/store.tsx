import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./states/urlSlice";

export const store = configureStore({
  reducer: {
    /*
    {name}: {Slice関数名}
    */
    url: urlReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
