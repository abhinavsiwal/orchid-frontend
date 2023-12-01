import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface categoryInterface {
  categories: any[];
}

const initialState: categoryInterface = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<categoryInterface>) => {
      state.categories = action.payload.categories;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
