import React from "react";
import styles from "./ExactJob.module.css";
import UserPic from "@/components/userPic/UserPic";
import Image from "next/image";
// Photo source import
import Xx from "/public/svg/xx.svg";

export default function ExactJob() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.job}>
        <UserPic width={56} height={56} />
        <div className={styles.textContent}>
          <p className={styles.jobTitle}>Front-End developer</p>
          <p className={styles.jobRecruiter}>Company Company</p>
          <div className={styles.jobRecruiterStatus}>
            <Image src={""} alt="darts icon" className={styles.dartsIcon} />
            <p className={styles.statusTitle}>Activly recruiting</p>
          </div>
        </div>
      </div>
      <div className={styles.removeBtn}>
        <Image src={Xx} alt="x icon" className={styles.xIcon} />
      </div>
    </div>
  );
}
