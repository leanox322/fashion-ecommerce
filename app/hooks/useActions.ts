import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { cartSlice } from "../store/cart/cart.slice";
import { productsSlice } from "../store/products/products.slice";
import { favouritesSlice } from "../store/favourites/favourites.slice";

const rootAction = {
  ...cartSlice.actions,
  ...productsSlice.actions,
  ...favouritesSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
