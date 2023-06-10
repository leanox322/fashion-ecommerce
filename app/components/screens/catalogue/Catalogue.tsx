import { FC } from "react";
import Layout from "../../layout/Layout";
import Container from "@/app/ui/container/Container";
import ProductItem from "../../../ui/product-item/ProductItem";
import Title from "@/app/ui/title/Title";
import Grid from "@/app/ui/grid/Grid";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";

const Catalogue: FC = () => {
  const products = useTypedSelector((state) => state.product.products);

  return (
    <Layout title="Catalogue" description="Catalog clothing and accessories">
      <div className="border-t-[2px] border-[#F4F6F5]">
        <Container>
          <Title text="CATALOGUE" width="310px" className="mt-24" />
          <Grid>
            {products.map((item, idx) => {
              return <ProductItem key={idx} product={item} />;
            })}
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default Catalogue;
