import React, { ReactNode } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const token = localStorage.getItem("dummy");

  if (token) {
    return (
      <div>
        <Navbar />
        <div className={styles.body}>
          <SideBar />
          <aside>{props.children}</aside>
        </div>
      </div>
    );
  } else {
    localStorage.removeItem("dummy");
    return <Navigate to="/" replace />;
  }
};

export default Layout;
