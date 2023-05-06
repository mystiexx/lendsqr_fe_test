import React from "react";
import styles from "../styles.module.scss";
import user from "../../../assets/dashboard/users.svg";
import active_user from "../../../assets/dashboard/active_users.svg";
import money from "../../../assets/dashboard/money.svg";
import loan from "../../../assets/dashboard/loan.svg";

interface SummaryProps {
  users: number;
  loans: number;
  active_users: number;
  users_savings: number;
}

const Summary: React.FC<SummaryProps> = ({
  users,
  loans,
  active_users,
  users_savings,
}) => {
  return (
    <div className={styles.summary}>
      {/* users summary card */}
      <div className={styles.card}>
        <div className={styles.users_circle}>
          <img src={user} alt="user" />
        </div>
        <div className={styles.title_text}>Users</div>
        <div className={styles.number}>{users}</div>
      </div>

      {/* active users summary */}
      <div className={styles.card}>
        <div className={styles.active_users_circle}>
          <img src={active_user} alt="user" />
        </div>
        <div className={styles.title_text}>Active Users</div>
        <div className={styles.number}>{active_users?.toLocaleString()}</div>
      </div>

      {/* users with loan summary */}
      <div className={styles.card}>
        <div className={styles.users_loan_circle}>
          <img src={loan} alt="user" />
        </div>
        <div className={styles.title_text}>Users with Loans</div>
        <div className={styles.number}>{loans}</div>
      </div>

      {/* users with savings summary */}
      <div className={styles.card}>
        <div className={styles.users_savings_circle}>
          <img src={money} alt="user" />
        </div>
        <div className={styles.title_text}>Users with Savings</div>
        <div className={styles.number}>{users_savings}</div>
      </div>
    </div>
  );
};

export default Summary;
