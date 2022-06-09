import type { FC, ReactNode } from "react";
import Header from "@/mod/Header/Header";
import Footer from "@/mod/Footer";
import Styles from "./MainLayout.module.css";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <main className={Styles.mainLayoutRoot}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
