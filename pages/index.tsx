import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import Home from "../app/components/screens/home/Home";
import { fetchProducts } from "@/app/store/products/products.slice";

const HomePage: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <Home />;
};

export default HomePage;
