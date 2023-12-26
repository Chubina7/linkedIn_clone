import React from "react";
import styles from "./Header.module.css";
// Custom components import
import Navbar from "./headerComponents/navbar/Navbar";
import RightFloater from "./headerComponents/rightFloater/RightFloater";
import LeftFloater from "./headerComponents/leftFloater/LeftFloater";

export default function header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <LeftFloater />
          <Navbar />
          {/* <RightFloater /> */}
        </div>
      </div>
    </header>
  );
}
