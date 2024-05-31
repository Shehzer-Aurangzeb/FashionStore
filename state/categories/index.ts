import { createSlice } from "@reduxjs/toolkit";
import { CategoriesSliceType, Category } from "./types";

const initialState: CategoriesSliceType = {
  categories: undefined,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesAction: (
      state,
      action: {
        payload: Category[];
      }
    ) => ({
      ...state,
      categories: action.payload,
    }),
  },
});

export const { setCategoriesAction } = categorySlice.actions;

export default categorySlice.reducer;
