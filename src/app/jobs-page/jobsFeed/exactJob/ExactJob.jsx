import React from "react";
import styles from "./ExactJob.module.css";
import UserPic from "@/components/userPic/UserPic";
import Image from "next/image";
// Photo source import
import DoneLogo from "/public/svg/done.svg";
import Xx from "/public/svg/xx.svg";

export default function ExactJob({ jobTitle, jobRecruiter, statusTitle, src }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.job}>
        <UserPic width={56} height={56} src={src} />
        <div className={styles.textContent}>
          <p className={styles.jobTitle}>{jobTitle}</p>
          <p className={styles.jobRecruiter}>{jobRecruiter}</p>
          <div className={styles.jobRecruiterStatus}>
            <Image
              src={DoneLogo}
              alt="darts icon"
              className={styles.dartsIcon}
            />
            <p className={styles.statusTitle}>{statusTitle}</p>
          </div>
        </div>
      </div>
      {/* <div className={styles.removeBtn}>
        <Image src={Xx} alt="x icon" className={styles.xIcon} />
      </div> */}
    </div>
  );
}
