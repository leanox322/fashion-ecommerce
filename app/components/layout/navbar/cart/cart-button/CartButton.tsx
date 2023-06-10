import React, { FC } from "react";
import { IconType } from "react-icons";

interface ICartButton {
  Icon: IconType;
  onClick?: () => void;
  number?: number;
}

const CartButton: FC<ICartButton> = ({ Icon, onClick, number }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer h-[42px] w-[42px] bg-white flex items-center justify-center relative"
    >
      {!!number && (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-0.5 text-[0.75rem] text-white absolute -bottom-0.5 -right-0.5">
          {number}
        </span>
      )}
      <Icon size={42} />
    </button>
  );
};

export default CartButton;
