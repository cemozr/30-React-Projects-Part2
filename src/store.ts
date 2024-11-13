import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./ProjectTwenty/paginationSlice";
import imageGalleryReducer from "./ProjectTwentySix/imageGallerySlice";

export const store = configureStore({
  reducer: { paginationReducer, imageGalleryReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
