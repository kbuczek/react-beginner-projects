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

interface ReducerAction {}

//state - current state before the update, action - what we are trying to do
const reducer = (state: AppContextInter, action: AppContextInter) => {
  return state;
};

export default reducer;
