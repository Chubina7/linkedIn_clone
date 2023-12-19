import React from "react";
import styles from "./LeftFloater.module.css";
import Image from "next/image";
// Photo source import
import Logo from "/public/svg/logo.svg";
import SearchInput from "../searchInput/SearchInput";
import Link from "next/link";

export default function LeftFloater() {
  return (
    <div className={styles.leftFloater}>
      <Link href={"/"}>
        <Image src={Logo} width={35} height={35} alt="home logo" />
      </Link>
      <SearchInput /> {/* Client rendering */}
    </div>
  );
}
