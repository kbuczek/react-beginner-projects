import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export interface ICartItem {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: ICartState = {
  cartItems: data,
  amount: 4,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ////we don't have to return state, because we are using Immer library. THERE IS NO NEED FOR THIS:
    ////  switch (action.type) {
    ////    case "CLEAR_CART":
    ////      return { ...state, cart: [] };
    //we can still use return if we want/need to
    // clearCart: (state) => {
    //   //// return controls whole state, so don't do this if you want to use return (state won't have amount, total and isLoading variables):
    //   //return {cartItems: []};
    // },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      //we destructure payload from action here
      // const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
