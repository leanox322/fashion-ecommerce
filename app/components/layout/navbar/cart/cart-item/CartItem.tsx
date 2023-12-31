import { FC } from "react";
import { ICartItem } from "@/app/types/cart.interface";
import CartActions from "./cart-actions/CartActions";
import { formatToCurrency } from "@/app/utils/format-to-currency";
import styles from "../Cart.module.scss";

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  return (
    <div className={styles.item}>
      <img
        src={item.product.image}
        width={50}
        height={50}
        alt={item.product.name}
      />
      <div>
        <div className={styles.name}>{item.product.name}</div>
        <div className={styles.price}>
          {formatToCurrency(item.product.price)}
        </div>
        <CartActions item={item} />
      </div>
    </div>
  );
};

export default CartItem;
