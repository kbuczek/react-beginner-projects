import { createSlice } from "@reduxjs/toolkit";

//this state will be controlled by store.ts

export interface CartState {
  cartItems: string[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  amount: 7,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
