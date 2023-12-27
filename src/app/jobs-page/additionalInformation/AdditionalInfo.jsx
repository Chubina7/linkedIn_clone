"use client";

import React, { useContext } from "react";
import styles from "./AdditionalInfo.module.css";
import ComponentBg from "@/components/componentBg/ComponentBg";
import UserPic from "@/components/userPic/UserPic";
import { LoginContext } from "@/context/LoginContext";

export default function AdditionalInfo() {
  const { userImage } = useContext(LoginContext);
  return (
    <ComponentBg>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Open To Work</p>
        <p className={styles.headingDesc}>Recomended based on your activity</p>
      </div>
      <div className={styles.pannel}>
        <p className={styles.pannelText}>
          Show recruiters you're open to new job opportunities
        </p>
        <UserPic width={56} height={56} src={userImage} />
      </div>
      <div className={styles.bottom}>
        <p className={styles.bottomText}>
          Increase your chances of getting a job sooner when you are #OpenToWork
          - you control who sees this.
        </p>
        <p className={styles.bottomBtn}>Get Started</p>
      </div>
    </ComponentBg>
  );
}
