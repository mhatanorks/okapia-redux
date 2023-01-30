import { createSlice } from "@reduxjs/toolkit";

export interface UrlState {
  value: boolean;
}
const initialState: UrlState = {
  value: false,
};

export const subtitleSlice = createSlice({
  name: "subtitle",
  initialState,
  reducers: {
    // 処理内容
    setSubtitle: (state) => {
      state.value = true;
    },
  },
});

export const { /* 処理名 */ setSubtitle } = subtitleSlice.actions;
export default subtitleSlice.reducer;
