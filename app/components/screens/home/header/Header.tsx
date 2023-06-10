import { FC } from "react";
import HeaderContent from "./header-content/HeaderContent";
import HeaderList from "./header-list/HeaderList";

const Header: FC = () => {
  return (
    <header>
      <HeaderContent />
      <HeaderList />
    </header>
  );
};

export default Header;
