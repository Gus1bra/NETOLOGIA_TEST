import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../components/content/contentSlicer";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
