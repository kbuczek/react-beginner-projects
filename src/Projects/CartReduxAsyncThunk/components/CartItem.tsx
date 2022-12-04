import React from "react";
import type { ICartItem } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem: React.FC<ICartItem> = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cartItem">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="cartItem-price">${price}</h4>
        <button
          className="cartItem-remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="cartItem-amount-btn"
          onClick={() => {
            //if we destructure payload from action in increase, id has to be in {}
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="cartItem-amount">{amount}</p>
        <button
          className="cartItem-amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            //if we destructure payload from action in increase, id has to be in {}
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
