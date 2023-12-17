import React from "react";
import styles from "./ProfileIcon.module.css";
import Image from "next/image";
// Photo source import
import ArrowDown from "/public/svg/arrow-down.svg";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <Image src={""} className={styles.navItem} alt="profile" />
      <div className={styles.title}>
        <p className={styles.text}>Me</p>
        <Image src={ArrowDown} alt="arrow down" />
      </div>
    </div>
  );
}
