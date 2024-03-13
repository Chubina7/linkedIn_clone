import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
// Photo source import
import FooterImg from "/public/jpg/footerImg.jpg";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {children}
        <Image
          src={FooterImg}
          alt="ad photo"
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.reservation}>
        <Link
          href={"https://github.com/Chubina7/linkedIn_clone"}
          target="_blank"
        >
          <p className={styles.link}>Project on GitHub</p>
        </Link>
        <Link href={"https://www.facebook.com/ChHubo.31"} target="_blank">
          <p className={styles.link}>Facebook</p>
        </Link>
        <Link href={"https://www.instagram.com/chubinaaa"} target="_blank">
          <p className={styles.link}>Instagram</p>
        </Link>
        <p className={styles.title}>&copy; Cloned By Luka Chubinidze</p>
      </div>
    </footer>
  );
}
