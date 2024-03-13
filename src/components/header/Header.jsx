import React from "react";
import styles from "./Header.module.css";
// Custom components import
import Navbar from "./headerComponents/navbar/Navbar";
import LeftFloater from "./headerComponents/leftFloater/LeftFloater";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <LeftFloater />
        <Navbar />
      </div>
    </header>
  );
}
