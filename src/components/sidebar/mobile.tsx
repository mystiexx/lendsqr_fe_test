import React from "react";
import styles from "./styles.module.scss";
import { route } from "./data";
import { NavLink, useLocation } from "react-router-dom";
import dashboard from "../../assets/sidebar/dashboard.svg";
import organization from "../../assets/sidebar/briefcas.svg";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  show: boolean;
  close: () => void;
}

const Mobile: React.FC<Props> = ({ show, close }) => {
  const location = useLocation();

  return (
    <div>
      <div className={styles.shadow} onClick={close} />
      <div className={show ? styles.mobile : styles.hide}>
        <div className={styles.sidebar_mobile}>
          <div
            className={styles.flex_route}
            style={{ paddingLeft: "27px", marginBottom: "52px" }}
          >
            <img src={organization} alt="briefcase" />
            <div className={styles.flex_content}>
              <h3>Switch Organization</h3>
              <BiChevronDown />
            </div>
          </div>

          <div className={styles.routes}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.nav_links_active : styles.nav_links
              }
            >
              <div className={styles.flex_route}>
                {"/" === location.pathname ? (
                  <img src={dashboard} alt="active" />
                ) : location.pathname.split("/")[1] ? (
                  <img src={dashboard} alt="active" />
                ) : (
                  <img src={dashboard} alt="active" />
                )}

                <div className={styles.name}>dashboard</div>
              </div>
            </NavLink>
            {route.map((data, i) => (
              <div key={`${i}+${data.title}`}>
                <p>{data.title}</p>
                {data.routes.map((data, i) => (
                  <NavLink
                    key={i}
                    to={data.link}
                    className={({ isActive }) =>
                      isActive ? styles.nav_links_active : styles.nav_links
                    }
                  >
                    <div className={styles.flex_route}>
                      {data.link === location.pathname ? (
                        <img src={data?.iconActive} alt="active" />
                      ) : data.link.includes(
                          location.pathname.split("/")[1]
                        ) ? (
                        <img src={data?.iconActive} alt="active" />
                      ) : (
                        <img src={data?.icon} alt="active" />
                      )}

                      <div className={styles.name}> {data.name}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
