import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../features/cart/cartSlice"; instead of clearing cart by clicking "clear cart", we are opening modal instead
import { openModal } from "../features/modal/modalSlice";
import type { RootState } from "../store";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="cart-btn clear-btn"
          onClick={() => {
            // dispatch(clearCart());
            dispatch(openModal());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
