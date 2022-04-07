import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slice/items/items";
import loginSlice from "./slice/login/loginSlice";
import shoppingCart from "./slice/shoppingCart/shoppingCartSlice";
import userDataSlice from "./slice/userData/userDataSlice";

const store = configureStore({
  reducer: {
    shoppingCart,
    itemsSlice,
    loginSlice,
    userDataSlice
  },
});

export default store;
