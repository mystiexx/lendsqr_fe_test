import React from "react";
import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.waterfall}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
