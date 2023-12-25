import React from "react";
import styles from "./PostAuthorBar.module.css";
import UserPic from "@/components/user/userPic/UserPic";
import Image from "next/image";
// Photo source import
import PublicIcon from "/public/svg/public.svg";
import ThreeDots from "/public/svg/dots.svg";
import Xx from "/public/svg/xx.svg";

export default function PostAuthorBar({
  authorName,
  authorSurename,
  authorWorkPlace,
  authorWorkTitle,
  authorProfileImage,
  postUploadDate,
}) {
  return (
    <div className={styles.postAuthorBar}>
      <div className={styles.leftContainer}>
        <UserPic width={48} height={48} src={authorProfileImage} />
        <div className={styles.textContent}>
          <p className={styles.postAuthorName}>
            {authorName} {authorSurename}
          </p>
          <p className={styles.postAuthorFollowers}>
            {authorWorkTitle} at {authorWorkPlace}
          </p>
          <div className={styles.postDetailsContainer}>
            <p className={styles.postUploadDate}>
              {postUploadDate
                .split(" ")
                .splice(0, 5)[4]
                .split(":")
                .splice(0, 2)
                .join(":")}
            </p>
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
