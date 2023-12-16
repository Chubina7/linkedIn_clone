import React from "react";
import styles from "./SearchInput.module.css";
import Image from "next/image";
// Photo source import
import SearchLogo from "/public/svg/search.svg";

export default function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputCont}>
        <Image
          src={SearchLogo}
          className={styles.searchLogo}
          alt="search button"
        />
        <input type="text" className={styles.input} placeholder="Search" />
      </div>
      <p className={styles.title}>Search</p>
    </div>
  );
}
