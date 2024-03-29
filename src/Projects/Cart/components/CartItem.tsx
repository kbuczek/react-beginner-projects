import React from "react";
import { useGlobalContext } from "../context";

interface CartItem {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

const CartItem: React.FC<CartItem> = ({ id, img, title, price, amount }) => {
  // const { remove, increase, decrease } = useGlobalContext();
  const { remove, changeAmount } = useGlobalContext();

  return (
    <article className="cartItem">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="cartItem-price">${price}</h4>
        {/* remove button */}
        <button className="cartItem-remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="cartItem-amount-btn"
          onClick={() => /*increase(id)*/ changeAmount(id, "increase")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="cartItem-amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="cartItem-amount-btn"
          onClick={() => /*decrease(id)*/ changeAmount(id, "decrease")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
