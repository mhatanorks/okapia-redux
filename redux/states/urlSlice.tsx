// url by index.tsx

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UrlState {
  value: string;
  defaultUrl: string;
}

const initialState: UrlState = {
  value: "/api/supabaseTours",
  defaultUrl: "/api/supabaseTours",
};

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    // 処理内容
    setUrl: (state, action: PayloadAction<string>) => {
      state.value = state.defaultUrl + action.payload;
    },
  },
});

export const { /* 処理名 */ setUrl } = urlSlice.actions;
export default urlSlice.reducer;
