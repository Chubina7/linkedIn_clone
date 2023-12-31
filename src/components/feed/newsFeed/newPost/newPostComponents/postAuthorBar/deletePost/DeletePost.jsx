import React from "react";
import styles from "./DeletePost.module.css";
// photo source import
import RecycleBin from "/public/svg/recycleBin.svg";
import Image from "next/image";

export default function DeletePost() {

  return (
    <div className={styles.optionsBg}>
      <Image src={RecycleBin} alt="x" className={styles.recycleBin} />
    </div>
  );
}
