import React from "react";
import styles from "./SearchInput.module.css";
import Image from "next/image";
// Photo source import
import SearchLogo from "/public/svg/search.svg";
import Suggestions from "./suggestions/Suggestions";

export default function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputCont}>
        <Image
          src={SearchLogo}
          className={styles.searchLogo}
          alt="search button"
        />

        <div className={styles.inputContainer}>
          <input type="text" className={styles.input} placeholder="Search" />
          <div className={styles.suggestionWrapper}>
            <Suggestions />
          </div>
          {/* <div className={styles.backdrop}></div> */}
        </div>
      </div>
      <p className={styles.title}>Search</p>
    </div>
  );
}
