import { FC } from "react";
import Layout from "../../layout/Layout";
import Header from "../home/header/Header";
import NewArrivals from "./new-arrivals/NewArrivals";
import PaydaySale from "./payday-sale/PaydaySale";
import YoungsFavourite from "./youngs-favourite/YoungsFavourite";
import DownloadApp from "./download-app/DownloadApp";
import JoinSection from "./join-section/JoinSection";
import Footer from "./footer/Footer";

const Home: FC = () => {
  return (
    <Layout title="Home" description="let's explore unique clothes">
      <Header />
      <NewArrivals />
      <PaydaySale />
      <YoungsFavourite />
      <DownloadApp />
      <JoinSection />
      <Footer />
    </Layout>
  );
};

export default Home;
