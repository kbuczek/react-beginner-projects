import NavbarCart from "./components/NavbarCart";
import CartContainer from "./components/CartContainer";

import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import type { RootState } from "./store";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <NavbarCart />
      <CartContainer />
    </main>
  );
}

export default App;
