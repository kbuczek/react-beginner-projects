import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
// import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

interface AppContextInter {
  cart: Cart[];
}

interface Cart {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

const AppContext = React.createContext<AppContextInter>({} as AppContextInter);

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart[]>(cartItems);

  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
