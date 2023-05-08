import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getLoading, getOrgNames } from "./redux/selectors";
import { get_users } from "./redux/reducer";
import styles from "./styles.module.scss";
import Summary from "./components/summary";
import Table from "./table/table";
import Pagination from "../../components/pagination";
import { User } from "./redux/types";
import { FormValues } from "./components/formTypes";
import Loader from "../../components/loader";
import Empty from "../../components/empty";

const status: string[] = ["inactive", "pending", "blacklisted", "active"];
const loans: boolean[] = [true, false];
const saving: boolean[] = [true, false];

const Users = () => {
  const users = useSelector(getUsers);
  const loading = useSelector(getLoading);
  const names = useSelector(getOrgNames);
  const dispatch = useDispatch();
  const [itemsOffset, setItemsOffset] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [pageCount, setPageCount] = useState<number>(0);
  const [loan, setLoan] = useState<number>(0);
  const [savings, setSavings] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<User[]>([]);
  const [mockData, setMockData] = useState<User[]>([]);

  useEffect(() => {
    dispatch(get_users());
  }, [dispatch]);

  useEffect(() => {
    const mappedData = users.map((item: User, index) => {
      return {
        ...item,
        status: status[index % status.length],
        loans: loans[index % loans.length],
        savings: saving[index % saving.length],
      };
    });
    setMockData(mappedData);
    const isLoan = mappedData.filter((data) => data.loans === true);
    const isSaving = mappedData.filter((data) => data.savings === true);
    setLoan(isLoan?.length);
    setSavings(isSaving?.length);
  }, [itemsOffset, itemsPerPage, users]);

  useEffect(() => {
    const endOffset = itemsOffset + itemsPerPage;
    setCurrentItems(mockData.slice(itemsOffset, endOffset));
    setPageCount(Math.ceil(mockData?.length / itemsPerPage));
  }, [mockData, itemsOffset, itemsPerPage]);

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setItemsPerPage(Number(e.target.value));
  };

  const handlePageClick = (selected: number): void => {
    const newOffset = (selected * itemsPerPage) % mockData.length;
    setItemsOffset(newOffset);
    setCurrentItems(mockData.slice(newOffset, newOffset + itemsPerPage));
  };

  const handleFilter = (data: FormValues) => {
    const { orgName, userName, status, phoneNumber, email } = data;
    const filteredData = mockData.filter((item: User) => {
      return (
        orgName === item?.orgName ||
        userName === item?.userName ||
        status === item?.status ||
        phoneNumber === item?.phoneNumber ||
        email === item?.email
      );
    });

    setMockData(filteredData);
  };

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className={styles.title}>Users</div>
          <Summary
            users={users?.length || 0}
            loans={loan || 0}
            active_users={2453}
            users_savings={savings || 0}
          />

          {/* table */}
          <div className={styles.table_card}>
            <div className={styles.table_container}>
              {currentItems?.length >= 1 ? (
                <Table
                  users={currentItems}
                  orgs={names}
                  status={status}
                  handleFilter={handleFilter}
                />
              ) : (
                <Empty
                  title={"No user yet!!"}
                  sub={"You don't have any user at the moment"}
                />
              )}
            </div>
          </div>

          {/* pagination */}
          {currentItems?.length >= 1 && (
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

              <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Users;
