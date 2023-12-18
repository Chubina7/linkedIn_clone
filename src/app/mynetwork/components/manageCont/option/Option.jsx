import React from "react";
import styles from "./Option.module.css";
import Image from "next/image";

export default function Option(props) {
  return (
    <div className={styles.option}>
      <div className={styles.left}>
        <Image src={props.src} alt={props.alt} className={styles.icon} />
        <p className={styles.leftText}>{props.title}</p>
      </div>
      <p className={styles.right}>{props.numberOfNoti}</p>
    </div>
  );
}
