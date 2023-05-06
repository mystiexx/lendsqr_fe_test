import React, { useEffect } from "react";
import Layout from "../../layout";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getLoading, getLoans, getSavings } from "./redux/selectors";
import { get_users } from "./redux/reducer";
import styles from "./styles.module.scss";
import Summary from "./components/summary";

const Users = () => {
  const users = useSelector(getUsers);
  const loan = useSelector(getLoans);
  const loading = useSelector(getLoading);
  const savings = useSelector(getSavings);
  const dispatch = useDispatch();

  // console.log(users);
  useEffect(() => {
    dispatch(get_users());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <div className={styles.title}>Users</div>
        <Summary
          users={users?.length}
          loans={loan?.length}
          active_users={2453}
          users_savings={savings?.length}
        />

        {/* table */}
        <div className={styles.card}></div>
      </Layout>
    </div>
  );
};

export default Users;
