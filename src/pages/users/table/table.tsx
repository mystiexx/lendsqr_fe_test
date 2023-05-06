import React, { useState } from "react";
import styles from "../styles.module.scss";
import filter from "../../../assets/dashboard/filter.svg";
import more from "../../../assets/dashboard/more.svg";
import view from "../../../assets/dashboard/view.svg";
import activate from "../../../assets/dashboard/activate_user.svg";
import { User } from "../redux/types";
import moment from "moment";
import { Link } from "react-router-dom";
import Badge from "../../../components/badge";

interface TableProps {
  users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {
  const head = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
    "",
  ];
  const [show, setShow] = useState(-1);

  const toggleMenu = (index: number): void => {
    setShow(show === index ? -1 : index);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            {head.map((data, i) => (
              <th key={i}>
                <div className={styles.th_head}>
                  <> {data} </>
                  <>
                    {data && (
                      <img
                        src={filter}
                        alt="filter"
                        className={styles.filter_icon}
                      />
                    )}
                  </>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {users.map((data, i) => (
            <tr key={data.id}>
              <td>{data.orgName}</td>
              <td>{data.userName}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td>{moment(data.createdAt).format("MMMM D, YYYY h:mm A")}</td>
              <td>
                <Badge type={data?.status} />
              </td>
              <td>
                <div className={styles.menu}>
                  <img
                    src={more}
                    alt="more"
                    className={styles.more}
                    onClick={() => toggleMenu(i)}
                  />{" "}
                  <div className={show === i ? styles.show : styles.hide}>
                    <div className={styles.content}>
                      <Link to={`/users/${data.id}`} className={styles.flex}>
                        <img src={view} alt="view" />
                        <p>View Details</p>
                      </Link>
                      <div className={styles.flex}>
                        <img src={view} alt="view" />
                        <p>Blacklist User</p>
                      </div>
                      <div className={styles.flex}>
                        <img src={activate} alt="view" />
                        <p>Activate User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
