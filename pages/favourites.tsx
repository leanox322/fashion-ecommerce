import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import Favourites from "@/app/components/screens/favourites/Favourites";
import { fetchProducts } from "@/app/store/products/products.slice";

const FavouritesPage: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <Favourites />;
};

export default FavouritesPage;
