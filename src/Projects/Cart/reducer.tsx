import React from "react";

interface Cart {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

interface AppContextInter {
  loading: boolean;
  cart: Cart[];
  total: number;
  amount: number;
}

enum ReducerActionKind {}

interface ReducerAction {
  type: string;
  payload?: number;
}

//state - current state before the update, action - what we are trying to do
//value that we return from reducer will be the new state
const reducer = (state: AppContextInter, action: ReducerAction) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "INCREASE":
      let tempCart: Cart[] = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount++ };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    case "DECREASE":
      let tempCart2: Cart[] = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount-- };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount > 0);
      return { ...state, cart: tempCart2 };
    // case "GET_TOTAL":
    //   const { total, amount } = state.cart.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, amount } = cartItem;
    //       cartTotal.amount += amount;
    //       return cartTotal;
    //     },
    //     { total: 0, amount: 0 }
    //   );
    //   return { ...state, total, amount: amount };
    default:
      return state;
  }
};

export default reducer;
