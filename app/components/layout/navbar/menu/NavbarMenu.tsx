import { FC } from "react";
import styles from "./NavbarMenu.module.scss";
import MenuItem from "./menu-item/MenuItem";
import { menu } from "./menu.data";

const NavbarMenu: FC = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        {menu.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;
