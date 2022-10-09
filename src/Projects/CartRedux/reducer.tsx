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
  payload?: any;
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
    // case "INCREASE":
    //   let tempCart: Cart[] = state.cart.map((cartItem) => {
    //     if (cartItem.id === action.payload) {
    //       return { ...cartItem, amount: cartItem.amount++ };
    //     }
    //     return cartItem;
    //   });
    //   return { ...state, cart: tempCart };
    // case "DECREASE":
    //   let tempCart2: Cart[] = state.cart
    //     .map((cartItem) => {
    //       if (cartItem.id === action.payload) {
    //         return { ...cartItem, amount: cartItem.amount-- };
    //       }
    //       return cartItem;
    //     })
    //     .filter((cartItem) => cartItem.amount > 0);
    //   return { ...state, cart: tempCart2 };
    case "CHANGE_AMOUNT":
      let tempCart: Cart[] = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type == "increase") {
              return { ...cartItem, amount: cartItem.amount++ };
            }
            if (action.payload.type == "decrease") {
              return { ...cartItem, amount: cartItem.amount-- };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount > 0);
      return { ...state, cart: tempCart };
    case "GET_TOTAL":
      //reduce - reduces an array to a single value
      //cartTotal (often called 'acc') - total of all calculations, cartItem ('curr') - current iteration/value
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += amount * price;
          return cartTotal; //ALWAYS RETURN A TOTAL!
        },
        { total: 0, amount: 0 } //initial values
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
    default:
      throw new Error("No matching action type");
  }
};

export default reducer;
