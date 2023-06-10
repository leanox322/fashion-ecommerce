import { FC, PropsWithChildren } from "react";
import Navbar from "./navbar/Navbar";
import Meta from "./meta/Meta";
import { ISeo } from "./meta/meta.interface";

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <div>
        <main>
          <Navbar />
          <section>{children}</section>
        </main>
      </div>
    </>
  );
};

export default Layout;
