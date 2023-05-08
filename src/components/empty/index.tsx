import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  sub?: string;
}

const Empty: React.FC<Props> = ({ title, sub }) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <p>{sub}</p>
    </div>
  );
};

export default Empty;
