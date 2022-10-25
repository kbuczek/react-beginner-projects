import { createSlice } from "@reduxjs/toolkit";

//this state will be controlled by store.ts
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

console.log(cartSlice);

export default cartSlice.reducer;
