import type { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footerRoot}>
      <p>کلیه حقوق محفوظ است</p>
    </footer>
  );
};

export default Footer;
