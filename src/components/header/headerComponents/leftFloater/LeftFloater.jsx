import React from "react";
import styles from "./LeftFloater.module.css";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "../searchInput/SearchInput";
// Photo source import
import Logo from "/public/svg/logo.svg";

export default function LeftFloater() {
  return (
    <div className={styles.leftFloater}>
      <Link href={"/"}>
        <Image src={Logo} width={35} height={35} alt="home logo" />
      </Link>
      <SearchInput />
    </div>
  );
}
