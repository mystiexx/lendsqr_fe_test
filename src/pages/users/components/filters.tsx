import React, { useState } from "react";
import styles from "../styles.module.scss";
import { Formik, Form } from "formik";
import { FormValues } from "./formTypes";

interface filterProps {
  hide: boolean;
  orgs: [];
  status: string[];
  handleFilter: (data: FormValues) => void;
}

const Filters: React.FC<filterProps> = ({
  hide,
  orgs,
  status,
  handleFilter,
}) => {
  const [data, setData] = useState<FormValues>({
    orgName: "",
    userName: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleSubmit = (doc: FormValues) => {
    handleFilter(doc);
  };

  const resetForm = () => {
    console.log("clicked me");
    setData({
      orgName: "",
      userName: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };
  return (
    <div className={styles.menu}>
      <div className={hide ? styles.filter_menu : styles.hide}>
        <Formik initialValues={data} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form>
              <div className={styles.filter_content}>
                <label>organization</label>
                <select
                  value={values.orgName}
                  onChange={handleChange}
                  name="orgName"
                >
                  <option selected>Select</option>
                  {orgs.map((data, i) => (
                    <option key={i}>{data}</option>
                  ))}
                </select>

                <label>username</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                />

                <label>email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />

                <label>date</label>
                <input
                  type="date"
                  placeholder="Date"
                  // value={values.date}
                  onChange={handleChange}
                />

                <label>phone number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />

                <label>status</label>
                <select
                  value={values.status}
                  onChange={handleChange}
                  name="status"
                >
                  <option selected>Select</option>
                  {status.map((data, i) => (
                    <option key={i} value={data}>
                      {data}
                    </option>
                  ))}
                </select>

                <div className={styles.btn_container}>
                  <button className={styles.reset} onClick={resetForm}>
                    Reset
                  </button>
                  <button type="submit">filter</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Filters;
