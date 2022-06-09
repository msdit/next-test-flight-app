import type { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.headerRoot}>
      <p className={styles.headerTitle}>خفنینو</p>
    </header>
  );
};

export default Header;
