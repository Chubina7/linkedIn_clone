import React from "react";
import styles from "./Button.module.css";
import Image from "next/image";

export default function Button({ src, onClick, alt, title, cursor }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <Image src={src} alt={alt} className={styles.icon} />
      <p className={styles.text}>{title}</p>
    </div>
  );
}
