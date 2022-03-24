import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    productAddedToCart: (products, action) => {
      products.push({
        id: ++lastId,
        product: products.find(product => product.id = action.payload.productId),
        quantity: action.payload.quantity
      });
    },
    productRemovedFromCart: (products, action) => {
      const index = products.find(product => product.id = action.payload.id);
      index.quantity -= action.payload.quantity
    }
  }
});

export const { productAddedToCart, productRemovedFromCart } = slice.actions;
export default slice.reducer;
