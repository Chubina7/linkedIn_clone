import React from "react";
import styles from "./RightFloater.module.css";
import Image from "next/image";
// Photo source import
import ArrowDown from "/public/svg/DownArrow.svg"
import More from "/public/svg/notes.svg";

export default function RightFloater() {
  return (
    <div className={styles.rightFloater}>
      <div className={styles.forBussines}>
        <Image src={More} />
        <div className={styles.title}>
          <p className={styles.text}>For Bussines</p>
          <Image src={ArrowDown} alt="arrow down" />
        </div>
      </div>
      <p className={styles.promotion}>
        Try for $0: <br /> Premium
      </p>
    </div>
  );
}
