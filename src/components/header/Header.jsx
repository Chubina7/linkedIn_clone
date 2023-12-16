import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
// Custom components import
import Navbar from "./headerComponents/navbar/Navbar";
// Image source import
import Logo from "/public/svg/logo.svg";
import SearchInput from "./headerComponents/searchInput/SearchInput";
import RightFloater from "./headerComponents/rightFloater/RightFloater";

export default function header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.leftFloater}>
            <Image src={Logo} width={35} height={35} alt="home logo" />
            <SearchInput />
          </div>
          <Navbar />
          <RightFloater />
        </div>
      </div>
    </header>
  );
}
