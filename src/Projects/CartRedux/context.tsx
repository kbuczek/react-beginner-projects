import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

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
  clearCart: Function;
  remove: Function;
  // increase: Function;
  // decrease: Function;
  changeAmount: Function;
}

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
  clearCart: () => null,
  remove: () => null,
  // increase: () => null,
  // decrease: () => null,
  changeAmount: () => null,
};

const AppContext = React.createContext<AppContextInter>(initialState);

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  // const [cart, setCart] = useState<Cart[]>(cartItems); //changing this to useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // const increase = (id: number) => {
  //   dispatch({ type: "INCREASE", payload: id });
  // };

  // const decrease = (id: number) => {
  //   dispatch({ type: "DECREASE", payload: id });
  // };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const changeAmount = (id: number, type: string) => {
    dispatch({ type: "CHANGE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        // increase,
        // decrease,
        changeAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
