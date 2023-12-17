import React from "react";
import styles from "./PostContent.module.css";
import Image from "next/image";

export default function PostContent() {
  return (
    <div className={styles.postContent}>
      <Image src={""} alt="content" className={styles.content} />
    </div>
  );
}
