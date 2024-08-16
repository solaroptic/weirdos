import React from "react";
import styles from "../css/Landing.module.css";
import MenuItem from "../components/MenuItem";
import { tempMenu } from "../utility/tempMenu";

const Menu = () => {
  return (
    <div className={`${styles["menu-main"]} ${styles.grid}`}>
      {tempMenu.map((each) => (
        <MenuItem
          key={each.item}
          item={each.item}
          contents={each.contents}
          price={each.price}
          shot={each.shot}
        />
      ))}
    </div>
  );
};

export default Menu;
