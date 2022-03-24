import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    apiUsersRequestSucceeded: (product, action) => {
      product.push(action.payload)
    },
  }
});

export const { apiUsersRequestSucceeded } = slice.actions;
export default slice.reducer;
