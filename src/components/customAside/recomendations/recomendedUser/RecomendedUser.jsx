import React from "react";
import styles from "./RecomendedUser.module.css";
import Image from "next/image";
import UserPic from "@/components/user/userPic/UserPic";
// Photo source import
import PlusIcon from "/public/svg/plus.svg";

export default function RecomendedUser() {
  return (
    <div className={styles.wrapper}>
      <UserPic width={48} height={48} />
      <div className={styles.text}>
        <p className={styles.recomendedUserName}>Test Testadze</p>
        <p className={styles.recomendedUserDesctription}>
          Lorem ipsum dolor sit amet!
        </p>
        <div className={styles.btn}>
          <Image src={PlusIcon} alt="plus icon" className={styles.plusIcon} />
          <p className={styles.btnTitle}>Follow</p>
        </div>
      </div>
    </div>
  );
}
