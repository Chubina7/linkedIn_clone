import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Image src={""} alt="ad photo" className={styles.image} />
      </div>
      <div className={styles.reservation}>
        <p className={styles.link}>Project on GitHub</p>
        <p className={styles.link}>Facebook</p>
        <p className={styles.link}>Instagram</p>
        <p className={styles.title}>&copy; Cloned By Luka Chubinidze</p>
      </div>
    </footer>
  );
}
