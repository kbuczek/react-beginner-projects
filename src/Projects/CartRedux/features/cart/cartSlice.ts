import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

//this state will be controlled by store.ts

export interface CartItem {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}

export interface CartState {
  cartItems: CartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: data,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
