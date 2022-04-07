import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] as {}[] };

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.cart = action.payload;
    },
    setItemCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { setShoppingCart, setItemCart } = shoppingCart.actions;
export default shoppingCart.reducer;
