import React from "react";
import { User } from "../../users/redux/types";
import styles from "../styles.module.scss";

interface Props {
  user: User;
}

const GeneralDetails: React.FC<Props> = ({ user }) => {
  return (
    <div className={styles.table_card}>
      {/* personal information */}
      <div className={styles.card_content}>
        <p>Personal information</p>
        <div className={styles.card_grid}>
          <div>
            <label>full name</label>
            <h6>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</h6>
          </div>
          <div>
            <label>phone number</label>
            <h6>{`${user?.profile?.phoneNumber}`}</h6>
          </div>
          <div>
            <label>email address</label>
            <h6>{`${user?.email}`}</h6>
          </div>
          <div>
            <label>bvn</label>
            <h6>{`${user?.profile?.bvn}`}</h6>
          </div>
          <div>
            <label>gender</label>
            <h6>{`${user?.profile?.gender}`}</h6>
          </div>
          <div>
            <label>marital status</label>
            <h6>Single</h6>
          </div>
          <div>
            <label>children</label>
            <h6>NONE</h6>
          </div>
          <div>
            <label>type of residence</label>
            <h6>Parent’s Apartment</h6>
          </div>
        </div>
      </div>

      {/* education and employment */}
      <div className={styles.card_content}>
        <p>Education and Employment</p>
        <div className={styles.card_grid}>
          <div>
            <label>level of education</label>
            <h6>{`${user?.education?.level}`}</h6>
          </div>
          <div>
            <label>employment status</label>
            <h6>{`${user?.education?.employmentStatus}`}</h6>
          </div>
          <div>
            <label>sector of employment</label>
            <h6>{`${user?.education?.sector}`}</h6>
          </div>
          <div>
            <label>duration of employment</label>
            <h6>{`${user?.education?.duration}`}</h6>
          </div>
          <div>
            <label>office email</label>
            <h6>{`${user?.education?.officeEmail}`}</h6>
          </div>
          <div>
            <label>monthly incone</label>
            <h6>{`₦${user?.education?.monthlyIncome[0]} - ₦${user?.education?.monthlyIncome[1]}`}</h6>
          </div>
          <div>
            <label>loan repayment</label>
            <h6>{user?.education?.loanRepayment}</h6>
          </div>
        </div>
      </div>

      {/* socials */}
      <div className={styles.card_content}>
        <p>Socials</p>
        <div className={styles.card_grid}>
          <div>
            <label>twitter</label>
            <h6>{`${user?.socials?.twitter}`}</h6>
          </div>
          <div>
            <label>facebook</label>
            <h6>{`${user?.socials?.facebook}`}</h6>
          </div>
          <div>
            <label>instagram</label>
            <h6>{`${user?.socials?.instagram}`}</h6>
          </div>
        </div>
      </div>

      {/* guarantor */}
      <div className={styles.card_content}>
        <p>Guarantor</p>
        <div className={styles.card_grid}>
          <div>
            <label>full name</label>
            <h6>{`${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`}</h6>
          </div>
          <div>
            <label>phone number</label>
            <h6>{`${user?.guarantor?.phoneNumber}`}</h6>
          </div>
          <div>
            <label>email address</label>
            <h6>{`${user?.guarantor?.address}`}</h6>
          </div>
          <div>
            <label>relationship</label>
            <h6>Sister</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
