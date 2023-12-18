import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import ComponentBg from "../componentBg/componentBg";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <ComponentBg>
        {children}
        <Image src={""} alt="ad photo" className={styles.image} />
      </ComponentBg>
      <div className={styles.reservation}>
        <p className={styles.link}>Project on GitHub</p>
        <p className={styles.link}>Facebook</p>
        <p className={styles.link}>Instagram</p>
        <p className={styles.title}>&copy; Cloned By Luka Chubinidze</p>
      </div>
    </footer>
  );
}
