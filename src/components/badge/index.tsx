import React from "react";
import styles from "./styles.module.scss";

interface BadgeProps {
  type: string;
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <div>
      {type === "inactive" ? (
        <div className={styles.inactive}>{type}</div>
      ) : type === "pending" ? (
        <div className={styles.pending}>{type}</div>
      ) : type === "blacklisted" ? (
        <div className={styles.blacklisted}>{type}</div>
      ) : (
        <div className={styles.active}>{type}</div>
      )}
    </div>
  );
};

export default Badge;
