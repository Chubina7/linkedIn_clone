import React from "react";
import styles from "./Loading.module.css";
import Image from "next/image";
// photo source import
import LinkedInLogo from "/public/png/linkdInLogo.png";
export default function Loading() {
  return (
    <div className={styles.modal}>
      <div className={styles.logoContainer}>
        <Image src={LinkedInLogo} alt="linkedIn logo" className={styles.logo} />
      </div>
      <p style={{ fontWeight: "bold" }}>Loading ...</p>
    </div>
  );
}
