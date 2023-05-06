import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getLoading, getLoans, getSavings } from "./redux/selectors";
import { get_users } from "./redux/reducer";
import styles from "./styles.module.scss";
import Summary from "./components/summary";
import Table from "./table/table";
import Pagination from "../../components/pagination";
import { User } from "./redux/types";

const Users = () => {
  const users = useSelector(getUsers);
  const loan = useSelector(getLoans);
  const loading = useSelector(getLoading);
  const savings = useSelector(getSavings);
  const dispatch = useDispatch();
  const [itemsOffest, setItemsOffset] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<User[]>([]);
  const status: string[] = ["inactive", "pending", "blacklisted", "active"];

  useEffect(() => {
    dispatch(get_users());
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemsOffest + itemsPerPage;
    const mappedData = users.map((item: User, index) => {
      return { ...item, status: status[index % status.length] };
    });
    setCurrentItems(mappedData.slice(itemsOffest, endOffset));
    console.log(mappedData);
    setPageCount(Math.ceil(users?.length / itemsPerPage));
  }, [itemsOffest, itemsPerPage, users]);

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setItemsPerPage(Number(e.target.value));
  };

  const handlePageClick = (selected: number): void => {
    const newOffset = (selected * itemsPerPage) % users.length;
    setItemsOffset(newOffset);
    setCurrentItems(
      users.slice(newOffset, newOffset + itemsPerPage).map((item: User) => {
        const status = ["inactive", "pending"];
        return { ...item, status: status[Math.floor(Math.random() * 2)] };
      })
    );
  };

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
        <div className={styles.table_card}>
          <div className={styles.table_container}>
            <Table users={currentItems} />
          </div>
        </div>

        {/* pagination */}
        <div className={styles.paginate_box}>
          <div className={styles.limit}>
            <div>Showing</div>
            <select value={itemsPerPage} onChange={handleLimit}>
              <option value="10">10</option>
              <option value={"20"}>20</option>
              <option value={"30"}>30</option>
              <option value={"40"}>40</option>
              <option value={"50"}>50</option>
            </select>
            out of {users?.length}
          </div>

          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </Layout>
    </div>
  );
};

export default Users;
