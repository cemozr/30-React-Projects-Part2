import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  currentPage: number;
};

const initialState: InitialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    previousPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const { nextPage, previousPage } = paginationSlice.actions;
