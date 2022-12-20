import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IContent {
  data: IContentData;
}

export interface IContentData {
  data: IContentArrayEl[];
}

export interface IContentArrayEl {
  direction: IContentDirection;
  groups: IContentGroup[];
}

export interface IContentDirection {
  badge: IBadge;
  id: string;
  link: string;
  title: string;
}

interface IBadge {
  bgColor: string;
  color: string;
  text: string;
}

export interface IContentGroup {
  badge: IBadge;
  id: string;
  link: string;
  title: string;
  items: IContentDirection[];
}

export const fetchContent = createAsyncThunk(
  "content/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response: IContent = await axios.get(
        "https://raw.githubusercontent.com/netology-code/react-task/master/netology.json"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить");
    }
  }
);
