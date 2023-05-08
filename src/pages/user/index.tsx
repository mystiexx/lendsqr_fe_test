import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { get_user } from "../users/redux/reducer";
import { getUser, getLoading } from "../users/redux/selectors";
import { UserType } from "./types";
import userIcon from "../../assets/user/user.svg";
import star_filled from "../../assets/user/star_filled.svg";
import star from "../../assets/user/star.svg";
import GeneralDetails from "./components/generalDetails";
import { Link } from "react-router-dom";
import back from "../../assets/user/back.svg";
import Loader from "../../components/loader";

const User: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(getUser);
  const [userProfile, setUserProfile] = useState<UserType | null>(null);
  const [step, setStep] = useState<number>(0);
  const loading = useSelector(getLoading);
  const tabs = [
    "general details",
    "documents",
    "bank details",
    "loans",
    "savings",
    "app and system",
  ];

  useEffect(() => {
    if (id) {
      dispatch(get_user(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setUserProfile(user);
    }
  }, [user]);

  const steps = [<GeneralDetails user={userProfile as UserType} />];
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <Link to="/users" className={styles.link}>
            <img src={back} alt="back" />
            Back to users
          </Link>
          <div className={styles.user_header}>
            <p>User Details</p>
            <div className={styles.btn_box}>
              <button className={styles.blacklist}>blacklist user</button>
              <button className={styles.activate}>activate user</button>
            </div>
          </div>

          <div className={styles.table_card}>
            <div className={styles.profile_box}>
              {userProfile?.profile?.avatar ? (
                <img src={userProfile?.profile?.avatar} alt="avatar" />
              ) : (
                <div className={styles.avatar}>
                  <img src={userIcon} alt="avatar" />
                </div>
              )}

              <div className={styles.name}>
                <p>{`${userProfile?.profile?.firstName} ${userProfile?.profile?.lastName}`}</p>
                <h5>{userProfile?.orgName}</h5>
              </div>

              <div className={styles.user_tier}>
                <h6>User's Tier</h6>
                <div className={styles.star}>
                  <img src={star_filled} alt="star_filled" />
                  <img src={star} alt="star_filled" />
                  <img src={star} alt="star_filled" />
                </div>
              </div>

              <div className={styles.bank}>
                <p>₦{userProfile?.accountBalance}</p>
                <h6>{userProfile?.accountNumber}/Providus Bank</h6>
              </div>
            </div>

            {/* tabs */}
            <div className={styles.tabs}>
              <div className={styles.tab}>
                {tabs.map((data, index) => (
                  <div
                    key={index}
                    onClick={() => setStep(index)}
                    className={
                      step === index ? styles.active : styles.tab_title
                    }
                  >
                    {data}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {steps[step]}
        </div>
      )}
    </Layout>
  );
};

export default User;
