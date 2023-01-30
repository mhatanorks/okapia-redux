import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./states/urlSlice";
import subtitleReducer from "./states/subtitleSlice";

export const store = configureStore({
  reducer: {
    /*
    {name}: {Slice関数名}
    */
    url: urlReducer,
    subtitle: subtitleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
