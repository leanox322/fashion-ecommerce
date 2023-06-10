import React, { FC } from "react";
import { ICartItem } from "@/app/types/cart.interface";
import { HiTrash } from "react-icons/hi";
import { useActions } from "@/app/hooks/useActions";
import { useCart } from "@/app/hooks/useCart";
import { HiPlus, HiMinus } from "react-icons/hi";

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
  const { changeQuantity, removeFromCart } = useActions();
  const { cart } = useCart();

  const quantity = cart.find((cartItem) => cartItem.id === item.id)?.quantity;

  return (
    <div className="flex items-center justify-between mt-2">
      <div className="text-base flex items-center">
        <button
          onClick={() => changeQuantity({ id: item.id, type: "minus" })}
          disabled={quantity === 1}
        >
          <HiMinus />
        </button>

        <span className="mx-2">{quantity}</span>
        <button onClick={() => changeQuantity({ id: item.id, type: "plus" })}>
          <HiPlus />
        </button>
      </div>
      <button onClick={() => removeFromCart({ id: item.id })}>
        <HiTrash color="darkRed" size={18} />
      </button>
    </div>
  );
};

export default CartActions;
