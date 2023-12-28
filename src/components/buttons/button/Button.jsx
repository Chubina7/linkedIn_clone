import React from "react";
import styles from "./Button.module.css";
import Image from "next/image";

export default function Button(props) {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <Image src={props.src} alt={props.alt} className={styles.icon} />
      <p className={styles.text}>{props.title}</p>
    </div>
  );
}
