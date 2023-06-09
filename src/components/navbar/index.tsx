import React, { useState } from "react";
import logo from "../../assets/navbar/logo.svg";
import notify from "../../assets/navbar/notification.svg";
import avatar from "../../assets/navbar/avatar.svg";
import search from "../../assets/navbar/search.svg";
import styles from "./styles.module.scss";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Mobile from "../sidebar/mobile";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className={styles.navbar}>
      {show && <Mobile show={show} close={() => setShow(!show)} />}
      <HiOutlineMenuAlt2
        className={styles.icon}
        size={50}
        onClick={() => setShow(!show)}
      />
      <img src={logo} alt="logo" />

      <div className={styles.flex}>
        <div className={styles.search_box}>
          <input type="text" placeholder="Search for anything" />
          <div className={styles.search_btn}>
            <img src={search} alt="search" />
          </div>
        </div>

        <div className={styles.right_content}>
          <h5>Docs</h5>
          <img src={notify} alt="notification" />
          <img src={avatar} alt="avatar" />
          <h6>Adedeji</h6>
          <FaCaretDown color={"#213F7D"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
