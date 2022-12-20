import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IContentArrayEl, IContentData, fetchContent } from "./contentActionsI";

export interface IState {
  loading: boolean;
  content: IContentArrayEl[];
  error: string;
}

const initialState: IState = {
  loading: false,
  content: [],
  error: "",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContent.fulfilled.type]: (
      state,
      action: PayloadAction<IContentData>
    ) => {
      state.loading = false;
      state.error = "";
      state.content = action.payload.data;
    },
    [fetchContent.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchContent.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default contentSlice.reducer;
