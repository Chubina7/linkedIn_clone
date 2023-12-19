"use client";

import { React, useEffect, useRef, useState } from "react";
import styles from "./SearchInput.module.css";
import Image from "next/image";
// Photo source import
import SearchLogo from "/public/svg/search.svg";

export default function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const inputActivationHandler = () => {
    setIsFocused(!isFocused);
  };

  const inputUnmountHandler = () => {
    setIsFocused(false);
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <div
          className={styles.searchLogoContainer}
          onClick={inputActivationHandler}
        >
          <Image
            src={SearchLogo}
            className={styles.searchLogo}
            alt="search button"
          />
          <p className={styles.title}>Search</p>
        </div>
        <div className={styles.staticInput}>
          <input type="text" className={styles.input} placeholder="Search" />
        </div>
      </div>
      {isFocused && (
        <div className={styles.floatingInput}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search"
            ref={inputRef}
            onBlur={inputUnmountHandler}
          />
        </div>
      )}
    </>
  );
}
