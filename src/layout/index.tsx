import React, { ReactNode } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import styles from "./styles.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <SideBar />
        <aside>{props.children}</aside>
      </div>
    </div>
  );
};

export default Layout;
