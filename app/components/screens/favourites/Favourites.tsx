import { FC } from "react";
import Link from "next/link";
import styles from "./Favourites.module.scss";
import Layout from "../../layout/Layout";
import Container from "@/app/ui/container/Container";
import ProductItem from "../../../ui/product-item/ProductItem";
import Title from "@/app/ui/title/Title";
import Grid from "@/app/ui/grid/Grid";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";

const Catalogue: FC = () => {
  const products = useTypedSelector((state) => state.favourites.favourites);

  return (
    <Layout title="Favourites" description="Your favourites">
      <div className="border-t-[2px] border-[#F4F6F5]">
        <Container>
          <Title text="YOUR FAVOURITES" width="465px" className="mt-24" />
          {products.length === 0 ? (
            <div className="flex flex-col gap-5">
              <h4 className="text-xl">Choose your favourites here:</h4>
              <Link href="/catalogue" className={styles.link}>
                Catalogue
              </Link>
            </div>
          ) : (
            <Grid>
              {products.map((item, idx) => {
                return <ProductItem key={idx} product={item} />;
              })}
            </Grid>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default Catalogue;
