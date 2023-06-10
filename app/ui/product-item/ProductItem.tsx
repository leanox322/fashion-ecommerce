import { FC } from "react";
import { IProduct } from "@/app/types/product.interface";
import { formatToCurrency } from "@/app/utils/format-to-currency";
import { useActions } from "@/app/hooks/useActions";
import { useCart } from "@/app/hooks/useCart";
import { HiOutlineStar } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import { useFavourites } from "@/app/hooks/useFavourites";

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const { cart } = useCart();
  const { addToCart, removeFromCart, toggleFavourites } = useActions();
  const { favourites } = useFavourites();

  const currentElement = cart.find(
    (cartItem) => cartItem.product.id === product.id
  );

  const isExists = favourites.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <img src={product.image} alt={product.name} className="h-[550px]" />
      <div>
        <h3 className="font-semibold text-4xl mt-7">{product.name}</h3>
        <h4 className="text-2xl font-medium mt-3 mb-4">
          {formatToCurrency(product.price)}
        </h4>
        <div className="flex items-center justify-between">
          <button
            onClick={() =>
              currentElement
                ? removeFromCart({ id: currentElement.id })
                : addToCart({ product, quantity: 1 })
            }
            className="btn-link text-2xl font-medium"
          >
            {currentElement ? "Remove from cart" : "Add to cart"}
          </button>
          <button onClick={() => toggleFavourites(product)}>
            {isExists ? (
              <HiStar size={32} color="gold" />
            ) : (
              <HiOutlineStar size={32} color="gold" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
