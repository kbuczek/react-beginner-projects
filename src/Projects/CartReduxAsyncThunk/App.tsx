import NavbarCart from "./components/NavbarCart";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import type { RootState } from "./store";
import { useEffect } from "react";
import { AppDispatch } from "../CartRedux/store";

function App() {
  const { cartItems, isLoading } = useSelector(
    (state: RootState) => state.cart
  );
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavbarCart />
      <CartContainer />
    </main>
  );
}

export default App;
