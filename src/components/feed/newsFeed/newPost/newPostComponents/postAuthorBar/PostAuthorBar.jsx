import React from "react";
import styles from "./PostAuthorBar.module.css";
import UserPic from "@/components/user/userPic/UserPic";
import Image from "next/image";
// Photo source import
import PublicIcon from "/public/svg/public.svg";
import ThreeDots from "/public/svg/dots.svg";
import Xx from "/public/svg/xx.svg";

export default function PostAuthorBar({ userFirstName, userLastName, userEmail, userImg }) {
  return (
    <div className={styles.postAuthorBar}>
      <div className={styles.leftContainer}>
        <UserPic width={48} height={48} src={userImg} />
        <div className={styles.textContent}>
          <p className={styles.postAuthorName}>
            {userFirstName} {userLastName}
          </p>
          <p className={styles.postAuthorFollowers}>{userEmail}</p>
          <div className={styles.postDetailsContainer}>
            <p className={styles.postUploadDate}>1w</p>
            <Image
              src={PublicIcon}
              alt="Post Privacy"
              className={styles.postPrivacy}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.optionsBg}>
          <Image
            src={ThreeDots}
            alt="three dots"
            className={styles.threeDots}
          />
        </div>
        <div className={styles.optionsBg}>
          <Image src={Xx} alt="x" className={styles.x} />
        </div>
      </div>
    </div>
  );
}
