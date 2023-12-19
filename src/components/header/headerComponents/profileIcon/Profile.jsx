import React from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
// Photo source import
import ArrowDown from "/public/svg/arrow-down.svg";
import UserPic from "@/components/user/userPic/UserPic";
import Modal from "./modal/Modal";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <UserPic width={24} height={24} />
      <div className={styles.title}>
        <p className={styles.text}>Me</p>
        <Image src={ArrowDown} alt="arrow down" />
      </div>
      {/* <div className={styles.modalWrapper}>
        <Modal />
      </div> */}
    </div>
  );
}
