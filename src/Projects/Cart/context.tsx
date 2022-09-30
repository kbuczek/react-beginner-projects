import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
// import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

const data = [
  {
    id: 1,
    title: "Samsung Galaxy S7",
    price: 599.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
    amount: 1,
  },
  {
    id: 2,
    title: "google pixel ",
    price: 499.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
    amount: 1,
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
    amount: 1,
  },
];

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

const AppContext = React.createContext<AppContextInter>({
  cart: [],
});

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart[]>(data);

  useEffect(() => console.log("cartItems", data), [data]);

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

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
