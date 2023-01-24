// render  ===========================================================
import { store } from "../redux/store";
import { Provider } from "react-redux";

import Home from "./index";

export default function Render() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

// Slice  =============================================================
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UrlState {
  value: string;
  defaultUrl: string;
}
const initialState: UrlState = {
  value: "",
  defaultUrl: "",
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    // 処理内容
    setUrl: (state, action: PayloadAction<any>) => {
      state.value = state.defaultUrl + action.payload;
    },
  },
});

// export const { /* 処理名 */ setUrl} = urlSlice.actions
// export default urlSlice.reducer

// State  =====================================================

import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { Type } from "typescript";

const url = useSelector((state: RootState) => state.url.value);
const dispatch = useDispatch();

dispatch(/*処理名*/ payload);
