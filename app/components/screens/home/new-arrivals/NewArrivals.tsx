import React, { FC } from "react";
import Title from "@/app/ui/title/Title";
import Container from "@/app/ui/container/Container";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import ProductCard from "@/app/ui/product-card/ProductCard";

const NewArrivals: FC = () => {
  const products = useTypedSelector((state) => state.product.products);
  const slicedProducts = products.slice(0, 3);

  return (
    <Container>
      <Title text="NEW ARRIVALS" width="380px" />
      <div className="flex justify-between mb-48">
        {slicedProducts.map((item, idx) => {
          return <ProductCard key={idx} card={item} />;
        })}
      </div>
    </Container>
  );
};

export default NewArrivals;
