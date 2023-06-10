import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import Catalogue from "@/app/components/screens/catalogue/Catalogue";
import { fetchProducts } from "@/app/store/products/products.slice";

const CataloguePage: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <Catalogue />;
};

export default CataloguePage;
