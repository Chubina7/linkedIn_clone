import React from "react";
import styles from "./UserMayKnow.module.css";
import UserPic from "@/components/user/userPic/UserPic";
import Image from "next/image";
// Photo source import
import Xx from "/public/svg/xx.svg"

export default function UserMayKnow() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.border}>
        <div className={styles.bg}>
          <div className={styles.floatContainer}>
            <UserPic width={72} height={72} />
            <div className={styles.xBg}>
              <Image src={Xx} alt="x" className={styles.removeBtn} />
            </div>
          </div>
        </div>
        <div className={styles.textContent}>
          <p className={styles.userName}>Test Testadze</p>
          <p className={styles.userWorkTitle}>HR at x company</p>
          <p className={styles.userFollowersNum}>9,999 followers</p>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.followButton}>Follow</button>
        </div>
      </div>
    </div>
  );
}
