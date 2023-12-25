import React from "react";
import styles from "./RecomendedUser.module.css";
import Image from "next/image";
import UserPic from "@/components/userPic/UserPic";
// Photo source import
import PlusIcon from "/public/svg/plus.svg";
import Link from "next/link";

export default function RecomendedUser({
  userName,
  userId,
  userSureName,
  userImage,
  workTitle,
}) {
  return (
    <div className={styles.wrapper}>
      <Link href={`/${userId}`}>
        <UserPic width={48} height={48} src={userImage} />
      </Link>
      <div className={styles.text}>
        <Link href={`/${userId}`}>
          <p className={styles.recomendedUserName}>
            {userName} {userSureName}
          </p>
        </Link>
        <p className={styles.recomendedUserDesctription}>{workTitle}</p>
        <div className={styles.btn}>
          <Image src={PlusIcon} alt="plus icon" className={styles.plusIcon} />
          <p className={styles.btnTitle}>Follow</p>
        </div>
      </div>
    </div>
  );
}
