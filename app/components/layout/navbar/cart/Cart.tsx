import React, { FC, useState } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { useOutside } from "@/app/hooks/useOutside";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { useActions } from "@/app/hooks/useActions";
import { useCart } from "@/app/hooks/useCart";
import styles from "./Cart.module.scss";
import { formatToCurrency } from "@/app/utils/format-to-currency";
import cn from "clsx";
import CartButton from "./cart-button/CartButton";
import CartItem from "./cart-item/CartItem";

const Cart: FC = () => {
  const { isShown, setIsShown, ref } = useOutside(false);
  const { clear } = useActions();
  const { total } = useCart();
  const cart = useTypedSelector((state) => state.cart.items);

  return (
    <div className="relative" ref={ref}>
      <CartButton
        Icon={HiShoppingBag}
        number={cart.length}
        onClick={() => {
          setIsShown(!isShown);
        }}
      />
      <div
        className={cn(
          "absolute z-10 top-[4.2rem] bg-fyellow/75 px-5 py-3 text-sm w-[12.5rem] -left-20 menu rounded-xl",
          isShown ? "open-menu" : "close-menu"
        )}
      >
        <h4 className="font-semibold mb-3 text-lg">My cart</h4>
        <div className={styles.cart}>
          {cart.length ? (
            cart.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <div className="font-light text-base">Cart is empty!</div>
          )}
        </div>
        <div className="flex flex-col">
          <span>Total:</span>
          <span className="text-lg">{formatToCurrency(total)}</span>
        </div>
        <div className="text-center mb-2">
          {!!cart.length && (
            <button
              onClick={() => clear()}
              className="mt-3 bg-black rounded text-white p-2"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
