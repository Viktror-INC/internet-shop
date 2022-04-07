import { createSlice } from "@reduxjs/toolkit";

const initialState = { userData: [] } as { userData: {}[] };

const userDataSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
