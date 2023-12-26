import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
// Photo source import
import GoogleLogo from "/public/png/googleLogo.png";
import GitHubLogo from "/public/png/gitHubLogo.png";

export default function page() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Welcome to your professional community
        </h1>
        <div className={styles.loginForm}>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Email</p>
            <input type="text" name="" id="" className={styles.input} />
          </div>
          <div className={styles.inputField}>
            <p className={styles.inputText}>Password</p>
            <input type="text" name="" id="" className={styles.input} />
          </div>
          <button className={styles.signInBtn}>Sign In</button>
          <p style={{ fontSize: "14px", opacity: "70%", fontStyle: "italic" }}>
            OR Sign In Using
          </p>
          <div className={styles.provider}>
            <p>Google</p>
            <Image
              src={GoogleLogo}
              width={18}
              height={18}
              alt="google logo
            "
            />
          </div>
          <div className={styles.provider}>
            <p>GitHub</p>
            <Image
              src={GitHubLogo}
              width={18}
              height={18}
              alt="google logo
            "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
