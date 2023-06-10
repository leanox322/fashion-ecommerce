import React, { FC } from "react";
import Container from "@/app/ui/container/Container";
import Title from "@/app/ui/title/Title";
import ProductCard from "@/app/ui/product-card/ProductCard";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";

const YoungsFavourite: FC = () => {
  const products = useTypedSelector((state) => state.product.products);
  const slicedProducts = products.slice(-2);

  return (
    <Container>
      <Title text="Young’s Favourite" width="475px" />
      <div className="flex justify-between mb-48">
        {slicedProducts.map((item, idx) => {
          return <ProductCard key={idx} card={item} />;
        })}
      </div>
    </Container>
  );
};

export default YoungsFavourite;
