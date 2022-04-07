import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] } as { items: {}[] };

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
  },
});

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
