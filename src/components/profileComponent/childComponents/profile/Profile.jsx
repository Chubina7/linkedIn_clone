import React from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
// Photo source import
import ProfilePic from "/public/jpg/profile.jpg";
import AddFriendIcon from "/public/svg/addFriend.svg";
import BookmarkIcon from "/public/svg/bookmark.svg";
import UserPic from "@/components/user/userPic/UserPic";
import ComponentBg from "@/components/componentBg/componentBg";

export default function Profile() {
  return (
    <ComponentBg>
      <div className={styles.backgroundImg}></div>
      <div className={styles.identifierContainer}>
        <div className={styles.identifier}>
          <UserPic height={72} width={72} />
          <p className={styles.userName}>Name Surename </p>
        </div>
        <p className={styles.userDescription}>- -</p>
      </div>
      <div className={styles.hoverContainer}>
        <div className={styles.connectionContainer}>
          <div className={styles.textContent}>
            <p className={styles.text}>Connections</p>
            <p className={styles.boldText}>Grow your network</p>
          </div>
          <Image
            src={AddFriendIcon}
            alt="add friend icon"
            className={styles.addFriendIcon}
          />
        </div>
      </div>
      <div className={styles.achieveContainer}>
        <p className={styles.text}>Achieve your career goals</p>
        <p className={styles.boldText}>Try premium for $0</p>
      </div>
      <div className={styles.bookmarkContainer}>
        <Image
          src={BookmarkIcon}
          alt="bookmark icon"
          className={styles.bookmarkIcon}
        />
        <p className={styles.boldText}>My items</p>
      </div>
    </ComponentBg>
  );
}
