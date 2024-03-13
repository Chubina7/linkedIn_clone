import React from "react";
import styles from "./Modal.module.css";
import UserPic from "@/components/userPic/UserPic";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";

export default function Modal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <UserPic width={48} heigth={48} />
        <div className={styles.textContent}>
          <p className={styles.userName}>Name Name</p>
          <p className={styles.userDesct}>- -</p>
        </div>
      </div>
      <FollowBtn title="View Profile" />
      <div className={styles.accountContainer}>
        <h1>Account</h1>
        <p className={styles.premium}>Try premium for $0</p>
        <p className={styles.text}>Settings & privacy</p>
        <p className={styles.text}>Help</p>
        <p className={styles.text}>Language</p>
      </div>
      <div className={styles.manageContainer}>
        <h1>Manage</h1>
        <p className={styles.text}>Post & activity</p>
        <p className={styles.text}>Job posting account</p>
      </div>
      <div className={styles.signOutContainer}>
        <p className={styles.text}>Sign Out</p>
      </div>
    </div>
  );
}
