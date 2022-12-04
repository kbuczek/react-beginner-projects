import NavbarCart from "./components/NavbarCart";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import type { RootState } from "./store";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavbarCart />
      <CartContainer />
    </main>
  );
}

export default App;
