import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
// Custom components import
import Navbar from "./headerComponents/navbar/Navbar";
// Image source import
import Logo from "/public/svg/logo.svg";
import SearchLogo from "/public/svg/search.svg";
import More from "/public/svg/notes.svg";

export default function header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.leftFloater}>
            <Image src={Logo} width={35} height={35} alt="home logo" />
            <div className={styles.searchContainer}>
              <Image
                src={SearchLogo}
                className={styles.searchLogo}
                alt="search button"
              />
            </div>
          </div>
          <Navbar />
          <div className={styles.rightFloater}>
            <Image src={More} />
            <p className={styles.text}>
              Try for $0: <br /> Premium
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
