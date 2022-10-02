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
}

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppContext = React.createContext<AppContextInter>(initialState);

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  // const [cart, setCart] = useState<Cart[]>(cartItems); //changing this to useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
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
